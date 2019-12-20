import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Button } from "react-bootstrap";
// import Navbar from "../layout/Navbar";
import {deleteProduct} from '../../actions/product'

const ProductItem = ({ deleteProduct,product: { _id, name, photo, price, date } }) => {
  const [Cart, setquantity] = React.useState(0);

  const handleIncrease = () => {
    if (Cart === 0) {
      setquantity(Cart + 1);
    } else {
    }
  };

  return (
    <div className="container-cloth">
       
            <button
              onClick={() => deleteProduct(_id)}
              type='button'
              
            >
              X
            </button>
         
      Cart: {Cart}
      <Link to={`/product/${_id}`}>
        <img className="container-image" src={photo} alt="Product IMG" />
      </Link>
      <div>
        <h4 className="clothes-title">{name}</h4>
        <p className="price">{price}</p>
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        <br /> <br />
        <button
          variant="outline-info"
          onClick={handleIncrease}
          className="addcart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  post: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps,{deleteProduct})(ProductItem);
