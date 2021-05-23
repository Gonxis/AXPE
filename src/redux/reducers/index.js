import { combineReducers } from 'redux'

import placesReducers from './places_reducers'

const appReducer = combineReducers({
  placesReducers,
})

const reducer = (state, action) => appReducer(state, action)

export default reducer
