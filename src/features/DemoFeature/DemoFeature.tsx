import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDemo } from 'app/rootReducer'
import classnames from 'classnames'
import DemoDataTable, { RowData } from 'components/DemoDataTable/DemoDataTable'
import { fetchDemoData, addDemoData } from './DemoFeatureSlice'

interface NavbarButtonProps {
  label: string
  pathnames: string[]
  currentPathname?: string
}

const DemoFeature = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!demo.items || demo.items.length === 0) {
      // dispatch(fetchDemoData())
    }
  })

  const demo = useSelector(selectDemo)

  if (demo.error) {
    return <div>Error: {demo.error}</div>
  }

  if (demo.status !== null) {
    return <div>Status: {demo.status}</div>
  }

  return <DemoDataTable items={[]} />
}

export default DemoFeature
