import { get } from 'lodash'

const INITIAL_STATE = {}

export const instagram = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  
    case 'SET_INSTAGRAM_LIST': {
      return setInstagramList(state, action.payload)
    }

    default: {
      return state
    }

  }
}

//////////

function setInstagramList(state = {}, payload) {
  return {
    ...state,
    entries: payload
  }
}
