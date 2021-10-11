import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../../redux/action/ActionAuth";
import { Redirect } from "react-router-dom";
import Loading from '../utils/loading/Loading'


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, users } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const addUser = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <div>
       {loading ? (
        <Loading/>
      ) : users ? (
        <Redirect to="/login" />
      ) : (
    <div className="login-page">
      <form >
        <h2>Register</h2>
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          type="password"
          name="password"
          required
          autoComplete="on"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <div className="row">
          <button onClick={addUser} type="submit">Register</button>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
    )}
    </div>
  );
};

export default Register;
