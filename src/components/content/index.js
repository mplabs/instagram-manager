import { h, Component } from 'preact'
import { get } from 'lodash'
import { connect } from 'preact-redux'
import { bindActions } from '../../util'
import actions from '../../store/actions'

@connect(store => get(store, 'instagram'), bindActions(actions))
export default class Content extends Component {

  componentDidMount() {
    setTimeout(() => this.props.requestInstagramMedia(), 250)
  }

  render() {
    return (
      <div id="Content"></div>
    )
  }
}