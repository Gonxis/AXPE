import placesConstants from '../../constants/places_constants'

const getAllPlaces = () => (dispatch) => {
  dispatch({ type: placesConstants.GET_ALL_PLACES })
}

const savePlace = (place) => (dispatch) => {
  dispatch({ type: placesConstants.SAVE_PLACES, place })
}

const placesActions = {
  getAllPlaces,
  savePlace,
}

export default placesActions
