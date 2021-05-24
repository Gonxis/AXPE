import React from 'react'
import PropTypes from 'prop-types'

const Marker = ({ text }) => (
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '18px',
      height: '18px',
      backgroundColor: '#000',
      border: '2px solid #fff',
      borderRadius: '100%',
    }}
    alt={text}
  />
)

Marker.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Marker
