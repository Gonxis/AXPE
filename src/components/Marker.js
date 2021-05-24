import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  background-color: #000;
  boder: 2px solid #fff;
  border-radius: 50%;
`

const Marker = ({ text }) => <Circle alt={text} />

Marker.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Marker
