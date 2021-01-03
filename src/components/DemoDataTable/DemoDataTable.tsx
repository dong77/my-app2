import React from 'react'
import styles from './DemoDataTable.module.scss'
import { DemoData, DemoDataItem } from 'api/loopringAPI'

// label, value, unit, timestamp
type RowData = [string, string, string, number]

interface DemoDataTableProps {
  items: RowData[]
}
const DemoDataTable = ({ items }: DemoDataTableProps) => {
  const func = (item: RowData, idx: number) => (
    <tr key={idx}>
      <td>{item[0]}</td>
      <td>{item[1]}</td>
      <td>{item[2]}</td>
    </tr>
  )

  return (
    <table className={styles.DemoDataTable} data-testid="DemoDataTable">
      items.map(func)
    </table>
  )
}
export default DemoDataTable
