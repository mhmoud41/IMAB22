import React, { Component } from "react";
import PropTypes from "prop-types";

export default class IMAB extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <h1>IMAB For Anime & Games Clothes</h1>
          <img src="/images/ENo3Kxx.jpg" alt="photo" />

          <h3>What is IMAB ? </h3>
          <a href="/aboutUs"> Know More About Us</a>

          <img src="/images/thumb-1920-718521.jpg" alt="photo" />
        </div>
        <div className="samples">
          <img src="/images/product(13).png" alt="photo" />
          <img src="/images/product(22).png" alt="photo" />
          <img src="/images/product(24).png" alt="photo" />
        </div>

        <div className="contact">
          <hr />
          <h3>Contact Us</h3>

          <div className="contac">
            Your-Email
            <input
              className="ee"
              type="text"
              placeholder="E-mail"
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "E-mail")}
            />
            <br></br>
            What is in your mind?
            <input
              className="cc"
              type="text"
              placeholder="ContactForm"
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "ContactForm")}
            />
          </div>
        </div>

        <div className="Links"></div>
      </div>
    );
  }
}
