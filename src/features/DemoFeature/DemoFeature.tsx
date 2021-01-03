import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { selectDemo } from 'app/rootReducer'
import classnames from 'classnames'
import DemoDataTable, { RowData } from 'components/DemoDataTable/DemoDataTable'
import { fetchDemoData, addDemoData } from './DemoFeatureSlice'
import { formatUnit } from 'utils/AmountUtils'
import {
  LocalizeContextProps,
  Translate as T,
  withLocalize,
} from 'react-localize-redux'

interface NavbarButtonProps {
  label: string
  pathnames: string[]
  currentPathname?: string
}

const DemoFeature = () => {
  const dispatch = useDispatch()
  const demo = useSelector(selectDemo, shallowEqual)
  const [input, setInput] = useState('')

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

  return (
    <div>
      <input
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value)
        }}
      />
      <button
        onClick={() => {
          if (input.length === 0) return
          const time = Date.now()

          const value = input + '100000000000000000'
          setInput('')

          dispatch(addDemoData({ label: 'new', value: value, timestamp: time }))
        }}
      >
        Add
      </button>
      <DemoDataTable
        headingLabel={<T id="demo.label" />}
        headingValue={<T id="demo.value" />}
        headingTime={<T id="demo.timestamp" />}
        items={items}
      />
    </div>
  )
}

export default DemoFeature
