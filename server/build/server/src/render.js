"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const server_1 = require("react-dom/server");
// import { ServerLocation } from "@reach/router"
const react_router_dom_1 = require("react-router-dom");
const App_1 = require("../../app/src/App");
function render(url) {
    const html = server_1.renderToString(React.createElement(react_router_dom_1.StaticRouter, { location: url },
        React.createElement(App_1.default, null)));
    console.log(url);
    console.log(html);
    return html;
}
exports.default = render;
