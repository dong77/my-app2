import React, { lazy, Suspense } from 'react'

const LazyHelpPage = lazy(() => import('./HelpPage'))

const HelpPage = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyHelpPage {...props} />
  </Suspense>
)

export default HelpPage
