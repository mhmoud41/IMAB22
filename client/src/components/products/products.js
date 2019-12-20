import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import ProductItem from "./productItem";
import { getProducts } from "../../actions/product";

const Products = ({ getProducts, product: { products, loading } }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(products);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = products.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  }, [searchTerm]);
  // const results = !searchTerm
  //   ? products
  //   : products.filter(person =>
  //       products.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  //     );

  const visible = 3;
  const [quantity, setquantity] = React.useState(0);

  const handleIncrease = () => {
    if (quantity - 3 >= Products.length) {
    } else {
      setquantity(quantity + visible);
    }
  };
  const handleDecrease = () => {
    if (quantity === 0) {
    } else {
      setquantity(quantity - visible);
    }
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="Search">
        Search For Products
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Search")}
        ></input>
      </div>
      <div className="container-clothes">
        {searchTerm != "" ? (
          <div className="container-cloth">
            {searchResults.map(item => (
              <div>
                {item.name}
                <Link to={`/product/${item._id}`}>
                  <img src={item.photo} />
                </Link>
                <p>{item.price}</p>{" "}
              </div>
            ))}
          </div>
        ) : (
          <div className="container-clothes">
            {products.length > 0 ? (
              products
                .slice(0, quantity + 3)
                .map(product => (
                  <ProductItem key={product.id} product={product} />
                ))
            ) : (
              <h4>No products found...</h4>
            )}
          </div>
        )}
      </div>
      <button type="button" className="but less" onClick={handleDecrease}>
        {" "}
        ShowLess{" "}
      </button>
      <br /> <br />
      <button className="but more" type="button" onClick={handleIncrease}>
        ShowMore
      </button>
    </Fragment>
  );
};

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps, { getProducts })(Products);
