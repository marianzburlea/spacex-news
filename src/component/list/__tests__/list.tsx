import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'
import List, { ActionButton } from '../list'

describe('list component', () => {
  it('should test the button component', () => {
    const testId = 'test-list-component'

    render(<List client="spacex" dataTestid={testId} />)

    expect(screen.getByTestId(testId)).toBeInTheDocument()
  })

  it('should test the action button component', async () => {
    const testId = 'test-list-component'

    render(<ActionButton dataTestid={testId} value={2} />)

    expect(screen.getByTestId(testId)).toBeInTheDocument()
  })

  it('should render the success message', async () => {
    const testId = 'test-list-component'

    await act(async () => {
      render(<List client="spacex" dataTestid={testId} />)
      await expect(screen.getByTestId(`${testId}-success`)).toBeInTheDocument()
    })
  })
})
