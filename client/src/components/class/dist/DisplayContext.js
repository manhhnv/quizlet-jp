"use strict";
exports.__esModule = true;
var react_1 = require("react");
var UrlProvider_1 = require("../../hooks/UrlProvider");
var DisplayContext = function () {
    var url = react_1.useContext(UrlProvider_1.UrlContext);
    return (react_1["default"].createElement("h1", null, url.url));
};
exports["default"] = DisplayContext;
