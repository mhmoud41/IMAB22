import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/Products" />;
  }

  return (
    <form onSubmit={e => onSubmit(e)}>
      <div className="login">
        <h2 className="hh">Login</h2>
        <br />
        E-mail :
        <br />
        <input
          type="E-mail"
          className="in"
          placeholder="Enter Email"
          name="email"
          value={email}
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Enter E-mail")}
          onChange={e => onChange(e)}
        />
        <br />
        password :
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={password}
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Enter Password")}
          onChange={e => onChange(e)}
        />
        <input type="submit" value="Sign In" />
        <p>
          <input type="checkbox" />
          Remember Me
        </p>
      </div>
    </form>
  );
};
Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, login })(Login);
