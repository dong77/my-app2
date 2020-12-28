import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ConnectButton from './ConnectButton'

describe('<ConnectButton />', () => {
  test('it should mount', () => {
    render(<ConnectButton />)

    const connectButton = screen.getByTestId('ConnectButton')

    expect(connectButton).toBeInTheDocument()
  })
})
