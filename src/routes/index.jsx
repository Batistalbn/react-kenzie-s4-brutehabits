import { Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Route from "./route";
import DashboardHabits from "../pages/DashboardHabits";
import DashboardGroups from "../pages/DashboardGroups";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/dashboard/habits">
        <DashboardHabits />
      </Route>
      <Route exact path="/dashboard/groups">
        <DashboardGroups />
      </Route>
    </Switch>
  );
}

export default Routes;
