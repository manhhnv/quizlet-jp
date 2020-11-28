"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var getQuerySearch_1 = require("../../helper/getQuerySearch");
var class_service_1 = require("../../services/class/class.service");
var react_copy_to_clipboard_1 = require("react-copy-to-clipboard");
var ShareClass = function (_a) {
    var showShareFolder = _a.showShareFolder, hideShareFolder = _a.hideShareFolder, user = _a.user, addToast = _a.addToast;
    var query = getQuerySearch_1.getQuerySearch();
    var id = query.get('id');
    var code = query.get('code');
    var _b = react_1.useState(''), sharedLink = _b[0], setSharedLink = _b[1];
    var _c = react_1.useState(false), copied = _c[0], setCopied = _c[1];
    var emailRef = react_1.useRef('');
    react_1.useEffect(function () {
        if (user === null || user === void 0 ? void 0 : user.token) {
            axios_1["default"].get(class_service_1.GENERATE_SHARED_LINK_CLASS.url + "/" + id + "/" + code, {
                headers: {
                    'Authorization': "Bearer " + user.token
                }
            })
                .then(function (res) {
                if (res.data !== null && res.data.link) {
                    setSharedLink(res.data.link);
                }
            });
        }
    }, []);
    var shareLink = function () {
        var _a;
        var friendEmail = emailRef.current.value;
        if (user === null || user === void 0 ? void 0 : user.token) {
            axios_1["default"].post("" + class_service_1.SHARE_CLASS_LINK.url, {
                'from': (_a = user === null || user === void 0 ? void 0 : user.user) === null || _a === void 0 ? void 0 : _a.email,
                'to': friendEmail,
                'link': sharedLink
            }, {
                headers: {
                    'Authorization': "Bearer " + user.token
                }
            })
                .then(function (res) {
                addToast("Shared with your friend", {
                    appearance: "success",
                    autoDismiss: true
                });
            })["catch"](function (e) {
                console.log(e);
                addToast("An error occurred during the sharing process", {
                    appearance: "error",
                    autoDismiss: true
                });
            });
        }
    };
    return (react_1["default"].createElement(react_bootstrap_1.Modal, { show: showShareFolder, onHide: hideShareFolder },
        react_1["default"].createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
            react_1["default"].createElement(react_bootstrap_1.Modal.Title, null, "M\u1EDDi th\u00E0nh vi\u00EAn tham gia")),
        react_1["default"].createElement(react_bootstrap_1.Modal.Body, null, sharedLink ? (react_1["default"].createElement("div", { className: "add-module-folder-container" },
            react_1["default"].createElement(react_bootstrap_1.Form, null,
                react_1["default"].createElement(react_bootstrap_1.Row, null,
                    react_1["default"].createElement(react_bootstrap_1.Col, { sm: 9 },
                        react_1["default"].createElement(react_bootstrap_1.Form.Group, null,
                            react_1["default"].createElement(react_bootstrap_1.Form.Control, { placeholder: "\u0110\u1ECBa ch\u1EC9 email b\u1EA1n b\u00E8", name: "name", className: "login-form", ref: emailRef }))),
                    react_1["default"].createElement(react_bootstrap_1.Col, { sm: 3 },
                        react_1["default"].createElement(react_bootstrap_1.Button, { variant: "success", onClick: shareLink }, "G\u1EEDi email")))),
            react_1["default"].createElement(react_bootstrap_1.Form, { noValidate: true, validated: copied },
                react_1["default"].createElement(react_bootstrap_1.Row, null,
                    react_1["default"].createElement(react_bootstrap_1.Col, { sm: 9 },
                        react_1["default"].createElement(react_bootstrap_1.Form.Group, { controlId: "validationCustom01" },
                            react_1["default"].createElement(react_bootstrap_1.Form.Control, { placeholder: "\u0110\u1ECBa ch\u1EC9 email b\u1EA1n b\u00E8", name: "name", className: "login-form", defaultValue: sharedLink }),
                            react_1["default"].createElement(react_bootstrap_1.Form.Control.Feedback, null, "\u0110\u00E3 sao ch\u00E9p li\u00EAn k\u1EBFt"))),
                    react_1["default"].createElement(react_bootstrap_1.Col, { sm: 3 },
                        react_1["default"].createElement(react_copy_to_clipboard_1["default"], { text: sharedLink, onCopy: function () { return setCopied(true); } },
                            react_1["default"].createElement(react_bootstrap_1.Button, { variant: "success" }, "Copy link"))))))) : (react_1["default"].createElement(react_bootstrap_1.Row, { className: "d-flex justify-content-center" },
            react_1["default"].createElement(react_bootstrap_1.Spinner, { animation: "border", variant: "primary" }))))));
};
exports["default"] = react_1["default"].memo(ShareClass);
