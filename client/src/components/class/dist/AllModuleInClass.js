"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var classActions_1 = require("../../redux/actions/classActions");
var react_redux_1 = require("react-redux");
var ai_1 = require("react-icons/ai");
var AllModuleInClass = function (_a) {
    var user = _a.user, class_ = _a.class_, getModulesInClass = _a.getModulesInClass, addToast = _a.addToast, classes = _a.classes, deleteModuleFromClass = _a.deleteModuleFromClass;
    react_1.useEffect(function () {
        if (user === null || user === void 0 ? void 0 : user.token) {
            getModulesInClass(user.token, class_.id, addToast);
        }
    }, [addToast, class_.id, getModulesInClass, user]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, classes && classes.totalModules > 0 ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_bootstrap_1.Row, { style: { marginTop: "15px" }, className: "d-flex justify-content-center" },
            react_1["default"].createElement("h3", null, "H\u1ECDc ph\u1EA7n")),
        react_1["default"].createElement(react_bootstrap_1.Row, { className: "list-module-folder" },
            react_1["default"].createElement(react_bootstrap_1.Col, { sm: 1 }),
            react_1["default"].createElement(react_bootstrap_1.Col, { sm: 11 },
                react_1["default"].createElement(react_bootstrap_1.Row, null, classes.modules.map(function (module, i) {
                    var _a, _b, _c;
                    return (react_1["default"].createElement(react_bootstrap_1.Card, { className: "module-item", key: i },
                        react_1["default"].createElement(react_bootstrap_1.Card.Body, null,
                            react_1["default"].createElement(react_bootstrap_1.Card.Title, null, module.name),
                            react_1["default"].createElement(react_bootstrap_1.Card.Subtitle, { className: "mb-2 text-muted" },
                                react_1["default"].createElement("img", { src: ((_a = user === null || user === void 0 ? void 0 : user.user) === null || _a === void 0 ? void 0 : _a.avatar) ? "" + ((_b = user === null || user === void 0 ? void 0 : user.user) === null || _b === void 0 ? void 0 : _b.avatar) : require('../../assets/avatar.png'), className: "avatar-small" }),
                                " " + ((_c = user === null || user === void 0 ? void 0 : user.user) === null || _c === void 0 ? void 0 : _c.username)),
                            react_1["default"].createElement(react_bootstrap_1.Card.Text, null, module === null || module === void 0 ? void 0 : module.description),
                            react_1["default"].createElement(react_bootstrap_1.Card.Link, null,
                                react_1["default"].createElement(react_bootstrap_1.OverlayTrigger, { placement: "bottom", overlay: react_1["default"].createElement(react_bootstrap_1.Tooltip, { id: "folder-delete" }, "X\u00F3a h\u1ECDc ph\u1EA7n") },
                                    react_1["default"].createElement(react_bootstrap_1.Button, { variant: "outline-danger", className: "folder-actions", onClick: function () { return deleteModuleFromClass(user.token, module.id, class_.id, addToast); } },
                                        react_1["default"].createElement(ai_1.AiOutlineDelete, null)))))));
                })))))) : (react_1["default"].createElement(react_bootstrap_1.Row, { style: { marginTop: "100px" }, className: "d-flex justify-content-center" },
        react_1["default"].createElement("h3", null, "Ch\u01B0a c\u00F3 h\u1ECDc ph\u1EA7n n\u00E0o trong l\u1EDBp h\u1ECDc")))));
};
// const mapStateToProps = (state: any) => {
//     return {
//     }
// }
var mapDispatchToProps = function (dispatch) {
    return {
        getModulesInClass: function (token, class_id, addToast) { return dispatch(classActions_1.getModulesInClass(token, class_id, addToast)); }
    };
};
exports["default"] = react_redux_1.connect(null, mapDispatchToProps)(react_1["default"].memo(AllModuleInClass));
