import applicationEffects from './application'

export default store => {
  // keyboardEffects(store)

  return next => action => {
    next(action)
    applicationEffects(store, action)
  }
}