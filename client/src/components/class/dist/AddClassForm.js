"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var converRefToObj_1 = require("../../helper/converRefToObj");
var AddClassForm = function (_a) {
    var showCreateClass = _a.showCreateClass, hideCreateClass = _a.hideCreateClass, createClass = _a.createClass, user = _a.user, addToast = _a.addToast;
    var classRef = react_1.useRef([]);
    var createClassHandle = function () {
        var input = converRefToObj_1.convertRefToObject(classRef.current);
        createClass(user.token, input, addToast);
        hideCreateClass();
    };
    return (react_1["default"].createElement(react_bootstrap_1.Modal, { show: showCreateClass, onHide: hideCreateClass },
        react_1["default"].createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
            react_1["default"].createElement(react_bootstrap_1.Modal.Title, null, "Th\u00EAm class m\u1EDBi")),
        react_1["default"].createElement(react_bootstrap_1.Modal.Body, null,
            react_1["default"].createElement("div", { className: "login-form-container" },
                react_1["default"].createElement(react_bootstrap_1.Form, null,
                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { placeholder: "Nh\u1EADp t\u00EAn l\u1EDBp h\u1ECDc...", name: "name", className: "login-form", ref: function (el) { return (classRef.current['name'] = el); }, required: true }),
                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { placeholder: "M\u00F4 t\u1EA3...", name: "name", className: "login-form", ref: function (el) { return (classRef.current['description'] = el); }, required: true }),
                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { as: "select", name: "public", ref: function (el) { return (classRef.current['public'] = el); }, className: "login-form", defaultValue: 1 },
                        react_1["default"].createElement("option", { value: 1 }, "M\u1ECDi ng\u01B0\u1EDDi"),
                        react_1["default"].createElement("option", { value: 0 }, "Ch\u1EC9 m\u00ECnh t\u00F4i")),
                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: "button", name: "create", value: "T\u1EA1o th\u01B0 m\u1EE5c", className: "login-button", onClick: createClassHandle }))))));
};
exports["default"] = AddClassForm;
