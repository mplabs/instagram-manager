import { combineReducers } from 'redux'

import * as application from './application'
import * as instagram from './instagram'

export default combineReducers(
  Object.assign({}, application, instagram)
)
