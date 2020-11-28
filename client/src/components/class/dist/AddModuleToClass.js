"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var converRefToObj_1 = require("../../helper/converRefToObj");
var AddModuleToClass = function (_a) {
    var showAddModule = _a.showAddModule, hideAddModuleModal = _a.hideAddModuleModal, user = _a.user, addToast = _a.addToast, module = _a.module, class_ = _a.class_, assignModuleToClass = _a.assignModuleToClass, createModuleInClass = _a.createModuleInClass;
    var moduleRef = react_1.useRef([]);
    var addNewModuleHandle = function () {
        var input = converRefToObj_1.convertRefToObject(moduleRef.current);
        console.log(input);
        createModuleInClass(user.token, class_.id, class_.code, input, addToast);
        hideAddModuleModal();
    };
    var assignModuleToClassHandle = function (module_id) {
        assignModuleToClass(user.token, module_id, class_.id, addToast);
        hideAddModuleModal();
    };
    return (react_1["default"].createElement(react_bootstrap_1.Modal, { show: showAddModule, onHide: hideAddModuleModal },
        react_1["default"].createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
            react_1["default"].createElement(react_bootstrap_1.Modal.Title, null, "Th\u00EAm h\u1ECDc ph\u1EA7n")),
        react_1["default"].createElement(react_bootstrap_1.Modal.Body, null,
            react_1["default"].createElement("div", { className: "add-module-folder-container" },
                react_1["default"].createElement("div", { className: "create-option" },
                    react_1["default"].createElement("h4", null, "T\u1EA1o m\u1EDBi")),
                react_1["default"].createElement(react_bootstrap_1.Form, null,
                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { placeholder: "Nh\u1EADp ti\u00EAu \u0111\u1EC1...", name: "name", className: "login-form", ref: function (el) { return (moduleRef.current['name'] = el); }, required: true }),
                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { placeholder: "Nh\u1EADp m\u00F4 t\u1EA3 (t\u00F9y ch\u1ECDn)", name: "description", ref: function (el) { return (moduleRef.current['description'] = el); }, className: "login-form" }),
                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: "number", className: "login-form", placeholder: "\u0110i\u1EC3m h\u1ECDc ph\u1EA7n t\u1ED1i \u0111a...", ref: function (el) { return (moduleRef.current['max_score'] = el); }, min: 0 }),
                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { as: "select", name: "public", ref: function (el) { return (moduleRef.current['public'] = el); }, className: "login-form", defaultValue: 1 },
                        react_1["default"].createElement("option", { value: 1 }, "M\u1ECDi ng\u01B0\u1EDDi"),
                        react_1["default"].createElement("option", { value: 0 }, "Ch\u1EC9 m\u00ECnh t\u00F4i")),
                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: "button", name: "create", value: "T\u1EA1o th\u01B0 m\u1EE5c", className: "login-button", onClick: addNewModuleHandle })),
                react_1["default"].createElement("div", { className: "create-option" },
                    react_1["default"].createElement("h4", null, "H\u1ECDc ph\u1EA7n c\u1EE7a b\u1EA1n"),
                    react_1["default"].createElement("div", { className: "import-modules" }, module && module.list.length > 0 ? module.list.map(function (item, i) { return (react_1["default"].createElement("div", { key: i, className: "your-module" },
                        item.name,
                        react_1["default"].createElement(react_bootstrap_1.Button, { onClick: function () { return assignModuleToClassHandle(item.id); } }, "+"))); }) : null))))));
};
exports["default"] = AddModuleToClass;
