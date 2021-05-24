import placesConstants from '../../constants/places_constants'

const initialState = {
  places: [],
}

function placesReducers(state = initialState, action) {
  switch (action.type) {
    case placesConstants.GET_ALL_PLACES:
      return {
        ...state,
      }
    case placesConstants.SAVE_PLACES:
      return {
        ...state,
        places: [...state.places, action.place],
      }
    default:
      return state
  }
}

export default placesReducers
