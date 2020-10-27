import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "../pages/Home";

const AppRouters = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <HomePage/>
                </Route>
            </Switch>
        </Router>
    )
}
export default AppRouters;