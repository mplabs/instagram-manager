import './polyfills'

import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import createStore from './store'
import actions from './store/actions'
import App from './components/App'

// Remove cloak
document.body.classList.remove('invisible')

// Initialize the app
const applicationStore = createStore({
  application: {
    pageTitle: 'Instagram Manager'
  },
  instagram: {
    clientId: '4ccf677a4193411baf90b8931424594a',
    redirectUri: 'http://localhost:1337'
  }
})

applicationStore.dispatch(actions.init())

render (
  <Provider store={applicationStore}>
    <App />
  </Provider>,
  document.body
)