import React from 'react'
import MyMeta from './MyMeta'
import Header from './Header'
import Loading from './Loading'
import Footer from './Footer'

type Props = {
  children?: React.ReactNode
  title?: string
}

const Layout = ({ children, title = 'Portfolio' }: Props) => (
  <Loading>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <MyMeta title={title} />
      <Header />
      <main className="flex flex-col items-center w-full flex-1 text-center">{children}</main>
      <Footer />
    </div>
  </Loading>
)

export default Layout
