import { Switch, Route } from "react-router-dom";
import Register from "./components/Auth/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Auth/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./components/Payment/Success";

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
      <Route path="/payment">
        <Checkout />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
    </Switch>
  );
};

export default App;
