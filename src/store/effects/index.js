import applicationEffects from './application'
import instagramEffects from './instagram'

export default store => {
  // keyboardEffects(store)

  return next => action => {
    next(action)
    instagramEffects(store, action)
    applicationEffects(store, action)
  }
}