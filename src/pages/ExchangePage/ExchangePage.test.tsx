import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ExchangePage from './ExchangePage'

describe('<ExchangePage />', () => {
  test('it should mount', () => {
    render(<ExchangePage />)

    const exchangePage = screen.getByTestId('ExchangePage')

    expect(exchangePage).toBeInTheDocument()
  })
})
