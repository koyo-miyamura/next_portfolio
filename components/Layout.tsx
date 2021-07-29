import React from 'react'
import MyMeta from 'components/MyMeta'
import Header from 'components/Header'
import Loading from 'components/Loading'
import Footer from 'components/Footer'

type Props = {
  children?: React.ReactNode
  title?: string
}

const Layout = ({ children, title = 'Portfolio' }: Props) => (
  <Loading>
    <MyMeta title={title} />
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="items-center justify-center flex-1">
        <main className="flex flex-col items-center w-full">{children}</main>
      </div>
      <Footer />
    </div>
  </Loading>
)

export default Layout
