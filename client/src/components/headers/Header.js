import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/action/ActionAuth";

const Header = () => {
  const { cartItem } = useSelector((state) => state.cartProduct);
  const accesstoken = localStorage.getItem('token');
  const dispatch = useDispatch()
  const loggout = () => {
    dispatch (logout())
}
  const getCartCount = () => {
    return cartItem.reduce((qty, item) => qty + item.qty, 0);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <div className="nav-link">
        <Link className="nav-link" to="/" style={{ marginRight: "20px" }}>
          <i class="fas fa-dumpster"> E-Commerce </i>
        </Link>
      </div>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        style={{ marginRight: "50px", textAlign: "center" }}
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <Link className="nav-link" to="/">
              <i class="fas fa-home">Home</i>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/products">
              <i class="fab fa-product-hunt">Products</i>
            </Link>
          </li>

      

          <li className="nav-item" style={{ marginLeft: "330px" }}>
            <Link className="nav-link" to="/contact">
              <i class="fas fa-poll-h">Contact</i>
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
          <li className="nav-item">
            <Link className="nav-link" to="/cart" exact>
              <i class="fas fa-shopping-cart">
                Cart<span> {getCartCount()} </span>
              </i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
