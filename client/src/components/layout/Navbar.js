import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { logout } from "../../actions/auth";

const Navbar1 = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/">IMAB</Link>
      </li>
      <li>
        <div>
          <Link to="/Products">Products</Link>
        </div>
      </li>

      <li>
        <Link to="/addproduct">AddProduct</Link>
      </li>
      <li>
        <Link to="/Carts">
          <i className="fas fa-user" /> <span className="hide-sm">Carts</span>
        </Link>
      </li>
      <li>
        <Link onClick={logout} to="/">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <div>
      <nav>
        <div className="outer">
          <a className="logo" href="/">
            IMAB
          </a>
        </div>

        <div className="navbarr">
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );

  return (
    <nav>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar1.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar1);
