import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import GoogleMap from './components/GoogleMap'
import SearchBox from './components/SearchBox'
import placesActions from './redux/actions/places_actions'

const Wrapper = styled.main`
  width: 100%;
  height: 98vh;
`

const App = () => {
  const dispatch = useDispatch()

  const [mapApiLoaded, setmapApiLoaded] = useState(false)
  const [mapInstance, setmapInstance] = useState()
  const [mapApi, setmapApi] = useState()

  const apiHasLoaded = (map, maps) => {
    setmapApi(maps)
    setmapInstance(map)
    setmapApiLoaded(true)
  }

  const getPlaces = () => {
    dispatch(placesActions.getAllPlaces())
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
          <SearchBox
            map={mapInstance}
            mapApi={mapApi}
            onPlacesChanged={getPlaces}
          />
        )}
      </GoogleMap>
    </Wrapper>
  )
}

export default App
