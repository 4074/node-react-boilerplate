"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const time_1 = require("../../redux/reducers/public/time");
class App extends React.Component {
    componentDidMount() {
        const { time, load } = this.props;
        if (!time.loaded) {
            load();
        }
    }
    render() {
        const { time } = this.props;
        return (React.createElement("div", null,
            time.loaded && time.data.date,
            React.createElement(react_router_dom_1.Link, { to: "/" }, "Go to Home")));
    }
}
exports.default = react_redux_1.connect((state) => ({ time: state.time }), { load: time_1.load })(App);
