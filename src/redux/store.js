import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import placesReducers from './reducers/places_reducers'

const initialState = {}

const middlewares = [thunk]

const composedEnhancers = compose(applyMiddleware(...middlewares))

const store = createStore(placesReducers, initialState, composedEnhancers)

export default store
