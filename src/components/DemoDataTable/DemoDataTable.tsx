import React from 'react'
import styles from './DemoDataTable.module.scss'
import { DemoData, DemoDataItem } from 'api/loopringAPI'

// label, value, unit, timestamp
export interface RowData {
  /**
   * The label
   */
  label: string
  /**
   * the value in full string
   */
  value: string
  /**
   * the value's unit
   */
  unit: string
  /**
   * timestamp
   */
  timestamp: number
}

export interface DemoDataTableProps {
  /**
   * a list of row data
   */
  items: RowData[]
}

/**
 * A component to demo how we seperate UI from logics
 */
const DemoDataTable = ({ items }: DemoDataTableProps) => {
  const _items = items || []
  const func = (item: RowData, idx: number) => (
    <tr key={idx}>
      <td>{item.label}</td>
      <td>
        {item.value} {item.unit}
      </td>
      <td>{item.timestamp}</td>
    </tr>
  )

  return (
    <table className={styles.DemoDataTable} data-testid="DemoDataTable">
      <thead>
        <tr>
          <th>Label</th>
          <th>Amount</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>{_items.map(func)}</tbody>
    </table>
  )
}

export default DemoDataTable
