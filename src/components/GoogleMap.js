import React from 'react'
import GoogleMapReact from 'google-map-react'
import PropTypes from 'prop-types'

const GoogleMap = ({
  children,
  defaultCenter,
  defaultZoom,
  onGoogleApiLoaded,
}) => (
  <GoogleMapReact
    bootstrapURLKeys={{
      key: [process.env.REACT_APP_GOOGLE_MAPS_API_KEY],
      libraries: ['places'],
    }}
    yesIWantToUseGoogleMapApiInternals
    defaultCenter={defaultCenter}
    defaultZoom={defaultZoom}
    onGoogleApiLoaded={onGoogleApiLoaded}
  >
    {children}
  </GoogleMapReact>
)

GoogleMap.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  defaultCenter: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  defaultZoom: PropTypes.number.isRequired,
  onGoogleApiLoaded: PropTypes.func.isRequired,
}

export default GoogleMap
