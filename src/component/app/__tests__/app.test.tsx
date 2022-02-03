import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '..'

describe('App component', () => {
  it('should render app', () => {
    const testId = 'test-app'
    render(<App dataTestId={testId} />)

    expect(screen.getByTestId(testId)).toBeInTheDocument()
  })
})
