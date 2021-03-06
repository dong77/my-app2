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

export const Default = Template.bind({})
Default.args = {
  headingLabel: 'Label',
  headingValue: 'Value',
  headingTime: 'Timestamp',
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

export const Empty = Template.bind({})
Empty.args = {
  headingLabel: 'Label',
  headingValue: 'Value',
  headingTime: 'Timestamp',
}

export const OneRow = Template.bind({})
OneRow.args = {
  headingLabel: '标识',
  headingValue: '值',
  headingTime: '时间',
  items: [{ label: 'foo', value: '123.1', unit: 'ETH', timestamp: 1234567 }],
}
