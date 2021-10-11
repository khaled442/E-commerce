import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/action/ActionAuth";
import { Link } from "react-router-dom";
import "./login.css";
import Loading from "../utils/loading/Loading";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAdmin, loading, users } = useSelector((state) => state.auth);
  console.log("isAdmin", isAdmin);
  const loggin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : isAdmin ? (
        <Redirect to="/admin" />
      ) : users ? (
        <Redirect to="/products" />
      ) : (
        <div className="login-page">
          <form>
            <h2>Login</h2>
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
              <button onClick={loggin} type="submit">
                Login
              </button>
              <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
