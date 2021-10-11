import React from "react";
import { Link } from "react-router-dom";
import "../../headers/header.css";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/action/ActionAuth";


const AdminHeader = () => {
  const accesstoken = localStorage.getItem('token');

  const dispatch = useDispatch()

  const loggout = () => {
    dispatch (logout())
}
  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <div className="nav-link">
        <Link to="/admin">
        <i class="fas fa-dumpster"> Admin </i>
        </Link>
      </div>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        style={{ marginLeft: "250px" }}
      >
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link to="/create Products">
            <i class="fab fa-product-hunt">Create Products</i>

            </Link>
          </li>

          <li className="nav-item">
            <Link to="/create categories">
            <i class="fab fa-product-hunt">Create Categories</i>

            </Link>
          </li>
          <li className="nav-item">
            {accesstoken ? (
              <Link className="nav-link" to="/login" onClick={loggout}>
                <i class="fa fa-sign-out-alt">  Logout</i>
              </Link>
            ) : (
              <Link className="nav-link" to="/login">
                <i class="fa fa-sign-in-alt pr-1">  Login</i>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminHeader;
