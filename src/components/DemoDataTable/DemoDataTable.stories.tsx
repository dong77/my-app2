/* eslint-disable */
import React from 'react'
import { storiesOf } from '@storybook/react'
import DemoDataTable from './DemoDataTable'

storiesOf('DemoDataTable', module).add('default', () => {
  const items = [
    { label: 'foo', value: '123.1', unit: 'ETH', timestamp: 1234567 },
    { label: 'foo', value: '123.1', unit: 'ETH', timestamp: 1234567 },
    { label: 'foo', value: '123.1', unit: 'ETH', timestamp: 1234567 },
    { label: 'foo', value: '123.1', unit: 'ETH', timestamp: 1234567 },
    { label: 'foo', value: '123.1', unit: 'ETH', timestamp: 1234567 },
    { label: 'foo', value: '123.1', unit: 'ETH', timestamp: 1234567 },
    { label: 'foo', value: '123.1', unit: 'ETH', timestamp: 1234567 },
  ]
  return <DemoDataTable items={items} />
})
