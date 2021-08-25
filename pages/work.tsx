import React from 'react'
import Layout from 'components/Layout'
import WorkCard from 'components/WorkCard'
import LifeGameImage from 'public/images/lifegame.png'
import LGTMakerImage from 'public/images/lgtmaker.jpg'

const WorkPage = () => (
  <Layout title="Work">
    <h1 className="text-4xl font-bold text-center p-2">Work</h1>
    <div className="lg:flex items-center container">
      <WorkCard
        imageUrl="https://www.kayac.com/uploads/project/main_image/1188/main."
        title="ぼくらの甲子園！ポケット"
        content="Perl5を用いたサーバサイド実装の担当"
      />
      <WorkCard
        imageUrl="https://www.kayac.com/uploads/project/main_image/1682/main."
        title="進撃の巨人タクティクス"
        content="Goを用いたサーバサイド実装の担当"
      />
    </div>
    <h1 className="text-4xl font-bold text-center p-2">Hobby</h1>
    <div className="lg:flex items-start container">
      <WorkCard imageUrl={LifeGameImage.src} title="LifeGame" content="Reactを用いたライフゲーム" />
      <WorkCard imageUrl={LGTMakerImage.src} title="LGTMaker" content="Reactを用いたLGTM画像生成" />
    </div>
  </Layout>
)

export default WorkPage
