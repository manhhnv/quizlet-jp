import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "../pages/Home";
import Overview from "../pages/Overview";
import Course from "../pages/Course";
import FolderDetail from "../pages/FolderDetail";

const AppRouters = () => {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <HomePage/>
                </Route>
                <Route path="/overview">
                    <Overview/>
                </Route>
                <Route path="/course">
                    <Course/>
                </Route>
                <Route path="/:username/folder">
                    <FolderDetail/>
                </Route>
            </Switch>
        </Router>
    )
}
export default AppRouters;