/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-return-assign */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
/* eslint-disable max-classes-per-file */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TestUtils from 'react-dom/test-utils'

import GoogleMap from '../components/GoogleMap'

describe('Components', () => {
  it('Should work', () => {
    const mapMarkerClassName = 'mapMarkerClassName'

    const MapMarker = () => <div className={mapMarkerClassName} />

    class MapHolder extends Component {
      static propTypes = {
        defaultCenter: PropTypes.array,
        defaultZoom: PropTypes.number,
      }

      static defaultProps = {
        defaultCenter: { lat: 59.955413, lng: 30.337844 },
        defaultZoom: 9,
      }

      render() {
        return (
          <GoogleMap
            defaultCenter={this.props.defaultCenter}
            defaultZoom={this.props.defaultZoom}
          >
            <MapMarker lat={59.955413} lng={30.337844} />
          </GoogleMap>
        )
      }
    }

    // console.log('GoogleMap', GoogleMap);

    const mapHolder = TestUtils.renderIntoDocument(<MapHolder />)

    const marker = TestUtils.findRenderedDOMComponentWithClass(
      mapHolder,
      'mapMarkerClassName',
    )
    expect(marker.parentNode.style.left).toEqual('0.250129066669615px')
    expect(marker.parentNode.style.top).toEqual('-12.62811732746195px')
  })
})
