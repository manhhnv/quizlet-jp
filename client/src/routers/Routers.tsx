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
import ClassDetail from "../pages/ClassDetail";
import Search from "../pages/Search";

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
                <Route path="/:username/folder" component={FolderDetail}>
                    {/* <FolderDetail/> */}
                </Route>
                <Route path="/:username/class" component={ClassDetail}>
                    {/* <ClassDetail/> */}
                </Route>
                <Route path="/:category/search" component={Search}></Route>
            </Switch>
        </Router>
    )
}
export default AppRouters;