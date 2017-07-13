import { assign } from 'lodash'

export const application = (state = {}, action) => {
  switch (action.type) {

    case 'TOGGLE_SIDEBAR': {
      const force = action.payload
      let sidebarVisible = !state.sidebarVisible

      if (typeof force !== 'undefined') {
        sidebarVisible = force
      }

      return assign({}, state, { sidebarVisible: sidebarVisible })
    }

    default:
      return state
  }
}