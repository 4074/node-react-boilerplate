import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App/App'
import createStore from './redux/create'

const store = createStore()

ReactDOM.render(
    <Provider store={store} key="provider">
        <App />
    </Provider>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept()
}