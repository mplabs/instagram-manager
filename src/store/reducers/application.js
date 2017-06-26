import { assign } from 'lodash'

export const application = (state = {}, action) => {
  switch (action.type) {

    case 'INIT': {
      const { basePath, sidebarVisible } = action.payload
      return { basePath, sidebarVisible }
    }

    case 'SET_PAGE_TITLE': {
      const nextTitle = action.payload || ''
      if (nextTitle !== document.title) {
        document.title = nextTitle
      }
      return state;
    }

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