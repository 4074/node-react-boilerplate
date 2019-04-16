"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
// import { Router } from "@reach/router"
const react_router_dom_1 = require("react-router-dom");
const containers_1 = require("./containers/");
const create_1 = require("./redux/create");
const store = create_1.default();
class C extends React.Component {
    render() {
        return (React.createElement(react_redux_1.Provider, { store: store, key: "provider" },
            React.createElement(react_router_dom_1.Route, { component: containers_1.App, path: "/", exact: true }),
            React.createElement(react_router_dom_1.Route, { component: containers_1.Time, path: "/time" })));
    }
}
exports.default = C;
