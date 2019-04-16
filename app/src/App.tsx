import * as React from 'react'
import { Provider } from 'react-redux'
// import { Router } from "@reach/router"
import { Route } from 'react-router-dom'

import { App, Time } from './containers/'
import createStore from './redux/create'

const store = createStore()

export default class C extends React.Component {
    render() {
        return (
            <Provider store={store} key="provider">
                <Route component={App} path="/" exact />
                <Route component={Time} path="/time" />
            </Provider>
        )
    }
}