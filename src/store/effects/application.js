import { get } from 'lodash'

import actions from '../actions'

export const applicationEffects = (store, action) => {
  const state = store.getState()

  switch(action.type) {

    case 'INIT': {
      const { pageTitle } = get(state, 'application')
      store.dispatch(actions.setPageTitle(pageTitle))
      break
    }

    case 'SET_PAGE_TITLE': {
      const nextTitle = action.payload || ''
      if (nextTitle !== document.title) {
        document.title = nextTitle
      }
      break
    }

    default:
      // Do nothing
      break

  }
}

export default applicationEffects
