import React, { useEffect, useState } from 'react'
import isEmpty from 'lodash.isempty'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import GoogleMap from './components/GoogleMap'
import Marker from './components/Marker'
import SearchBox from './components/SearchBox'
import placesActions from './redux/actions/places_actions'

const Wrapper = styled.main`
  width: 100%;
  height: 98vh;
`

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(placesActions.getAllPlaces())
  }, [])

  const [mapApiLoaded, setmapApiLoaded] = useState(false)
  const [mapInstance, setmapInstance] = useState()
  const [mapApi, setmapApi] = useState()
  const places = useSelector((state) => state.places)

  const apiHasLoaded = (map, maps) => {
    setmapApi(maps)
    setmapInstance(map)
    setmapApiLoaded(true)
  }

  return (
    <Wrapper>
      <GoogleMap
        defaultCenter={{ lat: 40.37, lng: -5.0 }}
        defaultZoom={6}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
      >
        {mapApiLoaded && (
          <SearchBox map={mapInstance} mapApi={mapApi} onPlacesChanged />
        )}
        {!isEmpty(places) &&
          places.map((place) => (
            <Marker
              key={place.place_id}
              text={place.name}
              lat={place.geometry.location.lat()}
              lng={place.geometry.location.lng()}
            />
          ))}
      </GoogleMap>
    </Wrapper>
  )
}

export default App
