import './polyfills'

import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import store from './store'
import actions from './store/actions'
import App from './components/App'

// Remove cloak
document.body.classList.remove('invisible')

// Initialize the app
store.dispatch(actions.init({
  pageTitle: 'NPM Preact Boilerplate'
}))

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.body
)