import React from 'react'
import styles from './ConnectButton.module.scss'
import {
  LocalizeContextProps,
  Translate as T,
  withLocalize,
} from 'react-localize-redux'

interface ConnectButtonProps {
  children: React.ReactNode
  onClick?: any
}

export const ConnectButton = ({ children, onClick }: ConnectButtonProps) => (
  <button
    className={styles.ConnectButton}
    data-testid="ConnectButton"
    onClick={onClick}
  >
    {children}
  </button>
)

export type ConnectButtonLocalizedProps = LocalizeContextProps &
  ConnectButtonProps

const ConnectButtonLocalized = (props: ConnectButtonLocalizedProps) => {
  return (
    <ConnectButton {...props}>
      <T id="greeting" />
    </ConnectButton>
  )
}

export default withLocalize(ConnectButtonLocalized)

// https://ryandrewjohnson.github.io/react-localize-redux-docs/#add-translations-to-components
