import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HeaderPage from "../components/layouts/Header";

const AppRouters = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <HeaderPage/>
                </Route>
            </Switch>
        </Router>
    )
}
export default AppRouters;