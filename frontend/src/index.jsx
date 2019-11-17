import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

//middleware
import promise from 'redux-promise' //espera a promise ser resolvida para disparar os reducers
import multi from 'redux-multi' //retornar um array com várias actions
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

//extensão redux
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//objeto store
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools) //middleware promises(chamada assicrona redux)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))
