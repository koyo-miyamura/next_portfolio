import React from 'react'
import Layout from 'components/Layout'
import { Timeline, timelineContents } from 'components/Timeline'
import TopImage from 'public/images/portfolio_top.png'

const IndexPage = () => {
  const IndexTopImage = () => (
    <div className="flex justify-center items-center w-full mb-8 h-top-image-sp md:h-top-image bg-sky-200">
      <img
        className="animate__animated animate__fadeIn px-2 pt-2 h-top-image-sp md:h-top-image"
        src={TopImage.src}
        alt="ポートフォリオ"
      />
    </div>
  )

  return (
    <Layout title="Home">
      <IndexTopImage />
      <div className="px-0 md:px-5">
        <h1 className="text-4xl font-bold text-center p-2 mb-8">Experience</h1>
        <Timeline timelineContents={timelineContents} />
      </div>
    </Layout>
  )
}

export default IndexPage
