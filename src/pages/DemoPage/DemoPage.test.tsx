import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DemoPage from './DemoPage'

describe('<DemoPage />', () => {
  test('it should mount', () => {
    render(<DemoPage />)

    const demoPage = screen.getByTestId('DemoPage')

    expect(demoPage).toBeInTheDocument()
  })
})
