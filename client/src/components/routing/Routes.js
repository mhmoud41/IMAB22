import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "../products/products";
import Product from "../Product/Product";
import AddProduct from "../product-form/AddProduct";
import Login from "../auth/login";
import Register from "../auth/register";
import Cart from "../Cart";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Alert from "../layout/Alert";
import Carts from "../dashboard/Carts";
import NotFound from "../layout/NotFound";
import IMAB from "../homePage/IMAB";
import AboutUs from "../homePage/aboutUs";
const Routes = () => {
  return (
    <section>
      <Alert />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <AdminRoute exact path="/addproduct" component={AddProduct} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/Carts" component={Carts} />
        <Route exact path="/" component={IMAB} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
