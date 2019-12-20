import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/Products" />;
  }
  return (
    <div className="login">
      <h2 className="hh">SignUp</h2>
      E-mail :
      <br />
      <form onSubmit={e => onSubmit(e)}>
        <input
          type="E-mail"
          className="in"
          placeholder="Enter Email"
          name="email"
          value={email}
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Enter Email")}
          onChange={e => onChange(e)}
        />
        <br />
        UserName :
        <br />
        <input
          type="text"
          placeholder="Enter UserName"
          name="name"
          value={name}
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Enter UserName")}
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
        <br />
        Repeat Password :
        <br />
        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          value={password2}
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Repeat Password")}
          onChange={e => onChange(e)}
        />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
