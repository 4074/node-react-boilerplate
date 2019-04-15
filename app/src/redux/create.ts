import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

import * as service from '../service'

export default function create() {
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument({ service })))
}