import { Switch, Route } from "react-router-dom";
import Register from "./components/Auth/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Auth/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";

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
    </Switch>
  );
};

export default App;
