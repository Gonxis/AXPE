/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchBox from '../components/SearchBox'

describe('SearchBox', () => {
  it('renders input', () => {
    const props = {
      place: 'Barcel',
      onSearch: jest.fn(),
    }

    const { container } = render(<SearchBox mapApi map onPlacesChanged />)
    const input = container.querySelector('input[type="text"]')
    userEvent.type(input, 'domain')

    expect(props.onSearch).toHaveBeenCalled()
  })
})
