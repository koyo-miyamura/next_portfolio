import React from 'react'
import Layout from 'components/Layout'
import { Timeline, TimelineContent } from 'components/Timeline'
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

  const timelines: TimelineContent[] = [
    {
      period: '1994',
      title: '誕生',
      content: <>熊本県熊本市出身</>,
    },
    {
      period: '2017',
      title: '学士課程修了',
      content: <>九州大学電気情報工学科 卒業</>,
    },
    {
      period: '2019/03',
      title: '大学院修士課程修了',
      content: <>九州大学大学院システム情報科学府 卒業</>,
    },
    {
      period: '2019/04 - 2021/08',
      title: '面白法人カヤック',
      content: (
        <>
          ◆ ゲーム事業部 サーバサイドエンジニア
          <br />
          ◆ 2019/04 - 2020/11
          <br />
          Goを用いて「進撃の巨人タクティクス」のサーバサイドを担当。協業企業の担当者とやりとりし、クローズ作業を担当。
          <br />
          ◆ 2020/05 - 2021/08
          <br />
          Perl5を用いて「ぼくらの甲子園ポケット」のサーバサイドを担当。2021年1月からサーバチームのリーダーを担当。
        </>
      ),
    },
    {
      period: '2021/09 - ',
      title: 'マネーフォワード',
      content: (
        <>
          福岡事業部 サーバサイドエンジニア
          <br />
          Ruby on Rails を用いたToB向けSaaSの開発を担当
          <br />
        </>
      ),
    },
  ]

  return (
    <Layout title="Home">
      <IndexTopImage />
      <h1 className="text-4xl font-medium p-2 mb-8">Experience</h1>
      <Timeline timelineContents={timelines} />
    </Layout>
  )
}

export default IndexPage
