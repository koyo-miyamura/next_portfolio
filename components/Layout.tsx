import React from 'react'
import Header from '@/components/Header'
import Loading from '@/components/Loading'
import Footer from '@/components/Footer'
import MyMeta from '@/components/MyMeta'

type Props = {
  children?: React.ReactNode
  title?: string
}

const Layout = ({ children, title = 'Portfolio' }: Props) => (
  <>
    <MyMeta title={title} />
    <Loading>
      <div className="flex flex-col min-h-screen bg-back text-text-color">
        <Header />
        <div className="items-center justify-center flex-1">
          <main className="flex flex-col items-center w-full">{children}</main>
        </div>
        <Footer />
      </div>
    </Loading>
  </>
)

export default Layout
