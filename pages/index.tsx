import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { useRecoilLoading } from '../store/loading'

const IndexPage = () => {
  const [isLoaded, setIsLoaded] = useRecoilLoading()

  const timer = (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
  }

  useEffect(() => {
    const f = async () => {
      await timer(2000)
      setIsLoaded(true)
    }
    f()
  }, [])

  if (!isLoaded) {
    return <>Loading...</>
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
