import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'

import * as S from '../list.style'

describe('test list style', () => {
  it('shuld render backdrop', () => {
    const testId = 'test-backdrop'
    render(<S.Backdrop data-testid={testId} />)

    expect(screen.getByTestId(testId)).toBeInTheDocument()
  })
})
