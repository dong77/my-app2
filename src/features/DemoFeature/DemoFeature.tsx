import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { selectDemo } from 'app/rootReducer'
import classnames from 'classnames'
import DemoDataTable, { RowData } from 'components/DemoDataTable/DemoDataTable'
import { fetchDemoData, addDemoData } from './DemoFeatureSlice'
import { formatUnit } from 'utils/AmountUtils'
interface NavbarButtonProps {
  label: string
  pathnames: string[]
  currentPathname?: string
}

const DemoFeature = () => {
  const dispatch = useDispatch()
  const demo = useSelector(selectDemo, shallowEqual)

  console.log('demo itmes', demo)

  useEffect(() => {
    if (demo.items === null) {
      dispatch(fetchDemoData())
    }
  }, [demo])

  if (demo.error) {
    return <div>Error: {demo.error}</div>
  }

  if (demo.status !== null) {
    return <div>Status: {demo.status}</div>
  }

  const demoItems = demo.items || []
  const items = demoItems.map((item, idx) => ({
    label: item.label,
    value: formatUnit(item.value, 18, 0),
    unit: 'ETH',
    timestamp: item.timestamp,
  }))

  return <DemoDataTable items={items} />
}

export default DemoFeature
