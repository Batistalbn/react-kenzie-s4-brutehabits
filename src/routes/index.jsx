import {Route, Switch} from "react-router-dom"


function Routes(){
return(
    
    <Switch>
        <Route exact path ='/'> {/* landing page */}
        
        </Route>
        <Route path = '/register'>

        </Route>
        <Route path = '/login'>

        </Route>
        <Route exact path = '/dashboard/habits'>

        </Route>
        <Route exact path = '/dasboard/groups'>

        </Route>
    </Switch>
)
}

export default Routes