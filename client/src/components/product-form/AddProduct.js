import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProduct } from "../../actions/product";
// import { Link } from "react-router-dom";
const AddProduct = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    photo: ""
  });

  const { name, price, description, photo } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      {/* <Link to='/' className='btn btn-light'>
            Back To Profiles
          </Link> */}
      <div className="post-form">
        <div className="pp">
          <form
            className="form my-1"
            onSubmit={e => {
              e.preventDefault();
              addProduct({ name, price, description, photo });
            }}
          >
            <div className="form-group">
              <h4 className="h">AddProductForm</h4>
              <input
                type="text"
                placeholder="Name"
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "Name")}
                name="name"
                value={name}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Price"
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "Price")}
                name="price"
                value={price}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Description"
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "Description")}
                name="description"
                value={description}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Photo-Path"
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "Photo-Path")}
                name="photo"
                value={photo}
                onChange={e => onChange(e)}
                required
              />
              {/* <input type="file" className="file"></input>
              name="photo" value={photo}
              onChange={e => onChange(e)}
              required */}
            </div>

            <input type="submit" className="btn btn-dark my-1" value="Submit" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired
};

export default connect(null, { addProduct })(AddProduct);
