import { h, Component } from 'preact'
import { get } from 'lodash'
import { connect } from 'preact-redux'
import { bindActions } from '../util'
import actions from '../store/actions'

import Content from './content'

@connect(store => get(store, 'application'), bindActions(actions))
export default class App extends Component {

  render({ pageTitle }) {
    return (
      <div id="app" class="layout vertical">
        <div class="pageTitle">
          <h1>{ pageTitle }</h1>
          <span class="tagline">
            Manage your Instagram posts.
          </span>
        </div>
        <Content />
      </div>
    )
  }
}