"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var ai_1 = require("react-icons/ai");
var react_router_dom_1 = require("react-router-dom");
var UpdateClassForm_1 = require("./UpdateClassForm");
var Folder = function (props) {
    var _a, _b;
    var class_ = props.class_, deleteClass = props.deleteClass, addToast = props.addToast, user = props.user, updateClass = props.updateClass;
    var _c = react_1.useState(false), showUpdateClass = _c[0], setShowUpdateClass = _c[1];
    var hideUpdateClass = function () {
        setShowUpdateClass(false);
    };
    return (react_1["default"].createElement(react_bootstrap_1.Card, { className: "card-container" },
        react_1["default"].createElement(react_bootstrap_1.Card.Header, { className: "curd-control" },
            react_1["default"].createElement(react_bootstrap_1.Button, { size: "sm", variant: "outline-danger" },
                react_1["default"].createElement(ai_1.AiOutlineDelete, { className: "delete-module", onClick: function () { return deleteClass(user.token, class_.id, addToast); } })),
            react_1["default"].createElement(react_bootstrap_1.Button, { size: "sm", variant: "primary", onClick: function () { return setShowUpdateClass(true); } },
                react_1["default"].createElement(ai_1.AiFillSetting, { className: "delete-module" })),
            react_1["default"].createElement(UpdateClassForm_1["default"], { class_: class_, showUpdateClass: showUpdateClass, hideUpdateClass: hideUpdateClass, user: user, addToast: addToast, updateClass: updateClass })),
        react_1["default"].createElement(react_router_dom_1.Link, { to: ((_a = user === null || user === void 0 ? void 0 : user.user) === null || _a === void 0 ? void 0 : _a.username) + "/class?code=" + class_.code + "&id=" + class_.id, style: { textDecoration: "none", color: "black" } },
            react_1["default"].createElement(react_bootstrap_1.Card.Body, { className: "folder-body" },
                react_1["default"].createElement(react_bootstrap_1.Card.Title, null, class_ === null || class_ === void 0 ? void 0 : class_.name),
                react_1["default"].createElement(react_bootstrap_1.Card.Text, null, class_ === null || class_ === void 0 ? void 0 : class_.description),
                react_1["default"].createElement(react_bootstrap_1.Card.Text, { style: { fontWeight: "bold" } },
                    "Ch\u1EBF \u0111\u1ED9: ",
                    class_.public === 1 ? (react_1["default"].createElement(ai_1.AiOutlineEye, null)) : (react_1["default"].createElement(ai_1.AiOutlineEyeInvisible, null))))),
        react_1["default"].createElement(react_bootstrap_1.Card.Footer, { className: "author-name", style: { backgroundColor: "white", display: "flex", justifyContent: "flex-end" } },
            "T\u1EA1o b\u1EDFi: ", (_b = user === null || user === void 0 ? void 0 : user.user) === null || _b === void 0 ? void 0 :
            _b.username)));
};
exports["default"] = Folder;
