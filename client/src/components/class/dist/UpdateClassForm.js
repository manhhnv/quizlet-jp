"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var converRefToObj_1 = require("../../helper/converRefToObj");
var UpdateClassForm = function (_a) {
    var showUpdateClass = _a.showUpdateClass, hideUpdateClass = _a.hideUpdateClass, user = _a.user, addToast = _a.addToast, class_ = _a.class_, updateClass = _a.updateClass;
    var classRef = react_1.useRef([]);
    var updateClassHandle = function () {
        var input = converRefToObj_1.convertRefToObject(classRef.current);
        console.log(input);
        updateClass(user.token, class_.id, input, addToast);
        hideUpdateClass();
    };
    return (react_1["default"].createElement(react_bootstrap_1.Modal, { show: showUpdateClass, onHide: hideUpdateClass },
        react_1["default"].createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
            react_1["default"].createElement(react_bootstrap_1.Modal.Title, null, "S\u1EEDa \u0111\u1ED5i l\u1EDBp h\u1ECDc")),
        react_1["default"].createElement(react_bootstrap_1.Modal.Body, null,
            react_1["default"].createElement("div", { className: "login-form-container" },
                react_1["default"].createElement(react_bootstrap_1.Form, null,
                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { placeholder: "Nh\u1EADp ti\u00EAu \u0111\u1EC1...", name: "name", className: "login-form", ref: function (el) { return (classRef.current['name'] = el); }, defaultValue: class_ === null || class_ === void 0 ? void 0 : class_.name, required: true }),
                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { placeholder: "Nh\u1EADp m\u00F4 t\u1EA3 (t\u00F9y ch\u1ECDn)", name: "description", ref: function (el) { return (classRef.current['description'] = el); }, className: "login-form", defaultValue: class_ === null || class_ === void 0 ? void 0 : class_.description }),
                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { as: "select", name: "public", ref: function (el) { return (classRef.current['public'] = el); }, className: "login-form", defaultValue: class_ === null || class_ === void 0 ? void 0 : class_.public },
                        react_1["default"].createElement("option", { value: 1 }, "M\u1ECDi ng\u01B0\u1EDDi"),
                        react_1["default"].createElement("option", { value: 0 }, "Ch\u1EC9 m\u00ECnh t\u00F4i")),
                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: "button", name: "update", value: "X\u00E1c nh\u1EADn thay \u0111\u1ED5i", className: "login-button", onClick: updateClassHandle }))))));
};
exports["default"] = react_1["default"].memo(UpdateClassForm);
