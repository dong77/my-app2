import React, { lazy, Suspense } from 'react'

const LazyExchangePage = lazy(() => import('./ExchangePage'))

const ExchangePage = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyExchangePage {...props} />
  </Suspense>
)

export default ExchangePage
