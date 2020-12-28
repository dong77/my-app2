import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DeFiPage from './DeFiPage'

describe('<DeFiPage />', () => {
  test('it should mount', () => {
    render(<DeFiPage />)

    const deFiPage = screen.getByTestId('DeFiPage')

    expect(deFiPage).toBeInTheDocument()
  })
})
