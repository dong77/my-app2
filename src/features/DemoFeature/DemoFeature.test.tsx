import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DemoFeature from './DemoFeature'

describe('<DemoFeature />', () => {
  test('it should mount', () => {
    render(<DemoFeature />)

    const demoFeature = screen.getByTestId('DemoFeature')

    expect(demoFeature).toBeInTheDocument()
  })
})
