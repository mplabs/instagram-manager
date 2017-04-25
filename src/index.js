import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import appReducer from './reducers'
import App from './components/App'

const initialState = {
  // Your apps initial state
}

const store = createStore(appReducer, initialState,
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(applyMiddleware(
    // Midlewares...
  ))
)

// Remove cloak
document.body.classList.remove('invisible')

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.body
)