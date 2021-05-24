import { createStore, compose } from 'redux'

import applyMiddleware from './middleware'
import placesReducers from './reducers/places_reducers'

const initialState = {
  places: [],
}

const composedEnhancers = compose(applyMiddleware)

const store = createStore(placesReducers, initialState, composedEnhancers)

export default store
