import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DocsPage from './DocsPage'

describe('<DocsPage />', () => {
  test('it should mount', () => {
    render(<DocsPage />)

    const docsPage = screen.getByTestId('DocsPage')

    expect(docsPage).toBeInTheDocument()
  })
})
