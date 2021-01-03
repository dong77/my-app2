import React from 'react'
import styles from './DemoDataTable.module.scss'
import { DemoData, DemoDataItem } from 'api/loopringAPI'

// label, value, unit, timestamp
export interface RowData {
  label: string
  value: string
  unit: string
  timestamp: number
}

interface DemoDataTableProps {
  items: RowData[]
}

const DemoDataTable = ({ items }: DemoDataTableProps) => {
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
      <tbody>{items.map(func)}</tbody>
    </table>
  )
}

export default DemoDataTable
