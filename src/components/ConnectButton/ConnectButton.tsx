import React from 'react'
import styles from './ConnectButton.module.scss'
import {
  LocalizeContextProps,
  Translate as T,
  withLocalize,
} from 'react-localize-redux'
import zhTranslation from './zh.json'

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
  props.addTranslationForLanguage(zhTranslation, 'zh')
  console.log('activeLanguage', props)
  return (
    <ConnectButton {...props}>
      <T id="greeting">Greeting</T>
    </ConnectButton>
  )
}

export default withLocalize(ConnectButtonLocalized)

// https://ryandrewjohnson.github.io/react-localize-redux-docs/#add-translations-to-components
