import React from 'react'
import Layout from 'components/Layout'
import Timeline from 'components/Timeline'
import TopImage from 'public/images/portfolio_top.png'

const IndexPage = () => {
  return (
    <Layout title="Home">
      <div className="flex justify-center items-center w-full mb-8 h-top-image-sp md:h-top-image bg-sky-200">
        <img
          className="animate__animated animate__fadeIn px-2 pt-2 h-top-image-sp md:h-top-image"
          src={TopImage.src}
          alt="ポートフォリオ"
        />
      </div>
      <h1 className="text-4xl font-medium p-2 mb-8">Experience</h1>
      <Timeline />
    </Layout>
  )
}

export default IndexPage
