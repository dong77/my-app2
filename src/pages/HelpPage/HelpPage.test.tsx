import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HelpPage from './HelpPage'

describe('<HelpPage />', () => {
  test('it should mount', () => {
    render(<HelpPage />)

    const helpPage = screen.getByTestId('HelpPage')

    expect(helpPage).toBeInTheDocument()
  })
})
