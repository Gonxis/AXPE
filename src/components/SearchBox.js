/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import placesActions from '../redux/actions/places_actions'

const Input = styled.input`
  position: absolute;
  top: -35%;
  left: -10%;
  padding: 7px 15px 7px 15px;
  outline: none;
  border-color: transparent;
  box-shadow: 2px 3px #f1f1f1;
  width: 250px;
`

const SearchBox = ({ map, mapApi, onPlacesChanged }) => {
  const dispatch = useDispatch()
  const searchInput = useRef(null)
  const searchBox = useRef(null)

  const handleOnPlacesChanged = useCallback(() => {
    if (onPlacesChanged) {
      const selected = searchBox.current.getPlaces()
      const { 0: place } = selected
      dispatch(placesActions.savePlace(place))

      if (!place.geometry) return
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport)
      } else {
        map.setCenter(place.geometry.location)
        map.setZoom(10)
      }

      searchInput.current.blur()
    }
  }, [onPlacesChanged, searchBox])

  const clearSearchBox = () => {
    searchInput.current.value = ''
  }

  useEffect(() => {
    if (!searchBox.current && mapApi) {
      searchBox.current = new mapApi.places.SearchBox(searchInput.current)
      searchBox.current.addListener('places_changed', handleOnPlacesChanged)
      searchBox.current.bindTo('bounds', map)
    }

    return () => {
      if (mapApi) {
        searchBox.current = null
        mapApi.event.clearInstanceListeners(searchInput)
      }
    }
  }, [mapApi, handleOnPlacesChanged])

  return (
    <Input
      ref={searchInput}
      type='text'
      placeholder='Enter a location'
      onFocus={clearSearchBox}
    />
  )
}

SearchBox.propTypes = {
  map: PropTypes.shape({
    fitBounds: PropTypes.func.isRequired,
    setCenter: PropTypes.func.isRequired,
    setZoom: PropTypes.func.isRequired,
  }).isRequired,
  mapApi: PropTypes.shape({
    places: PropTypes.shape({
      SearchBox: PropTypes.func.isRequired,
    }).isRequired,
    event: PropTypes.shape({
      clearInstanceListeners: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
  onPlacesChanged: PropTypes.bool.isRequired,
}

export default SearchBox
