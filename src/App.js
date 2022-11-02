import { Switch, Route } from "react-router-dom";
import Register from "./components/Auth/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Auth/Login";

const App = () => {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default App;
