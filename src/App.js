import { Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};

export default App;
