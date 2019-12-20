import React, { Component } from "react";
import PropTypes from "prop-types";

export default class aboutUs extends Component {
  render() {
    return (
      <div className="aboutus">
        <h1>OurStory</h1>
        <img
          src="/images/74525305_542118689977119_3807589929261727744_n.jpg"
          alt="photo"
        />
        <p> IMAB was an idea of a simple clothe page </p>
        <br></br>
        <p>
          First it was just a page for random clothes but then they made it to
          an Anime/Games-clothes page
        </p>
        <br></br>
        <p>In the end they made it like you can see now </p>

        <img src="/images/halo-1980x1080-980x420.jpg" alt="photo" />
      </div>
    );
  }
}
