import { Route, Switch } from "react-router-dom";
import Group from "../components/Group";
import GroupsList from "../components/GroupsList";
import LandingPage from "../pages/LandingPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/register"></Route>
      <Route path="/login"></Route>
      <Route exact path="/dashboard/habits"></Route>
      <Route exact path="/dasboard/groups">
        <GroupsList />
      </Route>
      <Route exact path="/dasboard/groups/:id">
        <Group />
      </Route>
    </Switch>
  );
}

export default Routes;
