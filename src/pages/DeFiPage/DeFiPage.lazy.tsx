import React, { lazy, Suspense } from 'react'

const LazyDeFiPage = lazy(() => import('./DeFiPage'))

const DeFiPage = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyDeFiPage {...props} />
  </Suspense>
)

export default DeFiPage
