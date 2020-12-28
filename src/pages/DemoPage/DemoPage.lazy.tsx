import React, { lazy, Suspense } from 'react'

const LazyDemoPage = lazy(() => import('./DemoPage'))

const DemoPage = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyDemoPage {...props} />
  </Suspense>
)

export default DemoPage
