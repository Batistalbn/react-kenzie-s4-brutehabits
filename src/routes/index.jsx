import { Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Route from "./route";
import DashboardHabits from "../pages/DashboardHabits";
import DashboardGroups from "../pages/DashboardGroups";

const Routes = () => {
  return (
    <Switch>

      <Route component={LandingPage} exact path="/"/>
        
      <Route component={Register} path="/register"/>
        
      <Route component={Login} path="/login"/>
        
      <Route isPrivate component={DashboardHabits} exact path="/dashboard/habits"/>
        
      <Route isPrivate component={DashboardGroups} exact path="/dashboard/groups"/>
       
    </Switch>
  );
}

export default Routes;
