import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from "@reach/router"

import { App, Time } from './containers/'
import createStore from './redux/create'

const store = createStore()

ReactDOM.render(
    <Provider store={store} key="provider">
        <Router>
            <App path="/" />
            <Time path="time" />
        </Router>
    </Provider>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept()
}