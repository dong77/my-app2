import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDemo } from 'app/rootReducer'
import classnames from 'classnames'
import DemoDataTable from 'components/DemoDataTable/DemoDataTable'
import { fetchDemoData, addDemoData } from './DemoFeatureSlice'

interface NavbarButtonProps {
  label: string
  pathnames: string[]
  currentPathname?: string
}

const DemoFeature = () => {
  const dispatch = useDispatch()
  const demo = useSelector(selectDemo)

  useEffect(() => {
    dispatch(fetchDemoData())
  })

  return <DemoDataTable />
}

export default DemoFeature
