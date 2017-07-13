import { get } from 'lodash'

import actions from '../actions'

import InstagramSource from '../../datasources/instagram'

let instagram

export const instagramEffects = (store, action) => {
  const state = store.getState()

  switch (action.type) {
    
    case 'INIT': {
      const { clientId, redirectUri } = get(state, 'instagram')
      instagram = new InstagramSource(clientId, redirectUri)
      break
    }

    case 'REQUEST_INSTAGRAM_MEDIA': {
      instagram.getOwnMedia()
        .then(response => store.dispatch(action.setInstagramMedia(response)))
      break
    }

    default:
      // Do nothing
      break
  }
}

export default instagramEffects
