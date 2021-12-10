import { Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Register from "../pages/Register";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/login"></Route>
      <Route exact path="/dashboard/habits"></Route>
      <Route exact path="/dasboard/groups"></Route>
    </Switch>
  );
}

export default Routes;
