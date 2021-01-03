import React from 'react'
import styles from './DemoDataTable.module.scss'
import { DemoData, DemoDataItem } from 'api/loopringAPI'

type RowData = [string, string, string, number]

interface DemoDataRowProps {
  item: RowData
}
const DemoDataRow = ({ item }: DemoDataRowProps) => {
  return <div />
}

interface DemoDataTableProps {
  items: RowData[]
}
const DemoDataTable = ({ items }: DemoDataTableProps) => {
  const func = (item: RowData, idx: number) => (
    <DemoDataRow item={item} key={idx} />
  )

  return (
    <table className={styles.DemoDataTable} data-testid="DemoDataTable">
      items.map(func)
    </table>
  )
}
export default DemoDataTable
