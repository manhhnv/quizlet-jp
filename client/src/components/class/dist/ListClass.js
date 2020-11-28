"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_toast_notifications_1 = require("react-toast-notifications");
var classActions_1 = require("../../redux/actions/classActions");
var Class_1 = require("./Class");
var react_bootstrap_1 = require("react-bootstrap");
var ListClass = function (_a) {
    var classes = _a.classes, deleteClass = _a.deleteClass, user = _a.user, updateClass = _a.updateClass;
    var addToast = react_toast_notifications_1.useToasts().addToast;
    return (
    // <Container>
    react_1["default"].createElement(react_bootstrap_1.Row, null,
        react_1["default"].createElement(react_bootstrap_1.Col, { xs: 1, className: "col-vertical-res" }),
        react_1["default"].createElement(react_bootstrap_1.Col, { xs: 10, className: "course-part" },
            react_1["default"].createElement("div", null, classes && classes.list && classes.list.length > 0 ? (classes.list.map(function (class_, index) { return (react_1["default"].createElement(Class_1["default"], { key: index, class_: class_, deleteClass: deleteClass, user: user, addToast: addToast, updateClass: updateClass })); })) : (react_1["default"].createElement("h3", null, "T\u1EA1o class ngay")))))
    // </Container>
    );
};
var mapStateToProps = function (state) {
    return {
        classes: state.classes
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        deleteClass: function (token, class_id, addToast) { return dispatch(classActions_1.deleteClass(token, class_id, addToast)); },
        updateClass: function (token, class_id, input, addToast) { return dispatch(classActions_1.updateClass(token, class_id, input, addToast)); }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(react_1["default"].memo(ListClass));
