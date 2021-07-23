import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { useRecoilLoading } from '../store/loading'
import { timer } from '../lib/utils'

const IndexPage = () => {
  const [isLoaded, setIsLoaded] = useRecoilLoading()

  useEffect(() => {
    const f = async () => {
      await timer(2000)
      setIsLoaded(true)
    }
    f()
  }, [])

  const Loading = () => (
    <div className="w-full h-screen flex justify-center items-center bg-white z-50">
      <img className="animate__animated animate__fadeInDown" src="/images/momizi_icon.png" alt="アイコン" />
    </div>
  )

  if (!isLoaded) {
    return <Loading />
  }

  return (
    <Layout title="Home">
      <div className="flex justify-center items-center w-full bg-blue-200">
        <img
          className="animate__animated animate__fadeIn lg:w-1/2"
          src="/images/portfolio_top.png"
          alt="ポートフォリオ"
        />
      </div>
    </Layout>
  )
}

export default IndexPage
