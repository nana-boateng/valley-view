import * as React from 'react'
import { ReactNode } from 'react'
import Meta from './meta'

import Footer from "./common/Footer"
type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
