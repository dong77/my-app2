/* eslint-disable */
import React from 'react'
import DemoDataTable, { DemoDataTableProps } from './DemoDataTable'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'DemoDataTable',
  component: DemoDataTable,
} as Meta

const Template: Story<DemoDataTableProps> = (args) => (
  <DemoDataTable {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  items: [
    { label: 'foo', value: '123.1', unit: 'ETH', timestamp: 1234567 },
    { label: 'foo', value: '123.1', unit: 'ETH', timestamp: 1234567 },
    { label: 'foo', value: '123.1', unit: 'ETH', timestamp: 1234567 },
    { label: 'foo', value: '123.1', unit: 'ETH', timestamp: 1234567 },
    { label: 'foo', value: '123.1', unit: 'ETH', timestamp: 1234567 },
    { label: 'foo', value: '123.1', unit: 'ETH', timestamp: 1234567 },
    { label: 'foo', value: '123.1', unit: 'ETH', timestamp: 1234567 },
  ],
}
