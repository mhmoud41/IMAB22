import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProductItem from "../products/productItem";
import { getProduct } from "../../actions/product";

const Product = ({
  getProduct,
  product: { product, loading, description },
  match
}) => {
  useEffect(() => {
    getProduct(match.params.id);
  }, [getProduct, match.params.id]);

  return loading || product === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="info">
        {/* <h1>GOGO</h1>
        <p>very cheap very good very expensive</p> */}
        <p className="description">{description}</p>
      </div>
      <div className="singelProduct">
        <ProductItem product={product} />
      </div>
    </Fragment>
  );
};

Product.propTypes = {
  getProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps, { getProduct })(Product);
