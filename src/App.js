import React, { useState } from 'react'
import styled from 'styled-components'
import GoogleMap from './components/GoogleMap'

const Wrapper = styled.main`
  width: 100%;
  height: 98vh;
`

const App = () => {
  const [, setmapApiLoaded] = useState(false)
  const [, setmapInstance] = useState()
  const [, setmapApi] = useState()

  const apiHasLoaded = (map, maps) => {
    setmapApiLoaded(true)
    setmapInstance(map)
    setmapApi(maps)
  }
  return (
    <Wrapper>
      <GoogleMap
        defaultCenter={{ lat: 40.37, lng: -5.0 }}
        defaultZoom={6}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
      />
    </Wrapper>
  )
}

export default App
