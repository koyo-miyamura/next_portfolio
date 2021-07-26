import React from 'react'
import Layout from 'components/Layout'
import Timeline from 'components/Timeline'

const IndexPage = () => {
  return (
    <Layout title="Home">
      <div className="flex justify-center items-center w-full mb-8 h-top-image bg-sky-200">
        <img
          className="animate__animated animate__fadeIn h-top-image"
          src="/images/portfolio_top.png"
          alt="ポートフォリオ"
        />
      </div>
      <h1 className="text-4xl font-medium p-2">Experience</h1>
      <Timeline />
    </Layout>
  )
}

export default IndexPage
