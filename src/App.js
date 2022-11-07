import { Switch, Route } from "react-router-dom";
import Register from "./components/Auth/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Auth/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./components/Order/Success";
import Address from "./components/Order/Address";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/products" exact>
        <Products />
      </Route>
      <Route path="/products/:productId">
        <ProductDetails />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <PrivateRoute path="/address">
        <Address />
      </PrivateRoute>
      <PrivateRoute path="/payment">
        <Checkout />
      </PrivateRoute>
      <PrivateRoute path="/success">
        <Success />
      </PrivateRoute>
    </Switch>
  );
};

export default App;
