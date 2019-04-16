"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const antd_1 = require("antd");
// import 'antd/dist/antd.css'
class App extends React.Component {
    render() {
        return (React.createElement("div", null,
            "Hello World!",
            React.createElement(antd_1.Button, { type: "primary" }, "Button"),
            React.createElement(react_router_dom_1.Link, { to: "time" }, "Go to Time")));
    }
}
exports.default = App;
