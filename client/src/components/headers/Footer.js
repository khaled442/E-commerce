import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="l-footer">
          <Link className="navbar-brand navbar-logo" to="/">
            <i class="fas fa-dumpster"></i>E-Commerce
          </Link>{" "}
          <br/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque
            tempore iure sit nobis? Vitae nemo, optio maiores numquam quis
            recusandae.
          </p>
        </div>
        <ul class="r-footer">
          <li>
            <h2>Social</h2>
            <ul class="box">
              <li>
                <a >Facebook</a>
              </li>
              <li>
                <a >Twitter</a>
              </li>
              <li>
                <a >Pinterest</a>
              </li>
              <li>
                <a >Dribbble</a>
              </li>
            </ul>
          </li>
          <li class="features">
            <h2>Information</h2>
            <ul class="box">
              <li>
                <a >Blog</a>
              </li>
              <li>
                <a >Pricing</a>
              </li>
              <li>
                <a >Sales</a>
              </li>
            </ul>
          </li>
          <li>
            <h2>Legal</h2>
            <ul class="box">
              <li>
                <a >Privacy Policy</a>
              </li>
              <li>
                <a >Terms of Use</a>
              </li>
              <li>
                <Link to="/contact">
                <a >Contact</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div class="b-footer">
          <p>All rights reserved by ©Khaled 2021 </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
