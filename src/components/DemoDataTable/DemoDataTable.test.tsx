import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DemoDataTable from './DemoDataTable'

describe('<DemoDataTable />', () => {
  test('it should mount', () => {
    render(<DemoDataTable />)

    const demoDataTable = screen.getByTestId('DemoDataTable')

    expect(demoDataTable).toBeInTheDocument()
  })
})
