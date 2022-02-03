import React from 'react'
import { render } from 'react-dom'

import { app, here } from '.'

jest.mock('react-dom', () => ({
  render: jest.fn(),
}))

describe('index.ts', () => {
  it('should render the app', () => {
    render(app, here)

    expect(render).toHaveBeenCalledWith(app, here)
  })
})
