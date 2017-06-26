import { combineReducers } from 'redux'

import * as application from './application'

export default combineReducers(
  Object.assign({}, application)
)
