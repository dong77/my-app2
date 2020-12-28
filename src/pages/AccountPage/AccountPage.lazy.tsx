import React, { lazy, Suspense } from 'react'

const LazyAccountPage = lazy(() => import('./AccountPage'))

const AccountPage = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyAccountPage {...props} />
  </Suspense>
)

export default AccountPage
