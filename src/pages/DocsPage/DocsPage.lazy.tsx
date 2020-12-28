import React, { lazy, Suspense } from 'react'

const LazyDocsPage = lazy(() => import('./DocsPage'))

const DocsPage = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyDocsPage {...props} />
  </Suspense>
)

export default DocsPage
