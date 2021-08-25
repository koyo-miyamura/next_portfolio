import React from 'react'
import Layout from 'components/Layout'
import WorkCard from 'components/WorkCard'
import LifeGameImage from 'public/images/lifegame.png'
import LGTMakerImage from 'public/images/lgtmaker.jpg'
import ExFFTImage from 'public/images/exfft.png'

const WorkPage = () => (
  <Layout title="Work">
    <div className="container px-8">
      <h1 className="text-4xl font-bold text-center py-4">Work</h1>
      <div className="lg:flex items-start container flex-wrap justify-around">
        <WorkCard
          imageUrl="https://www.kayac.com/uploads/project/main_image/1188/main."
          title="ぼくらの甲子園！ポケット"
          content="Perl5を用いたサーバサイド実装の担当"
          href="https://www.kayac.com/service/game/1188"
        />
        <WorkCard
          imageUrl="https://www.kayac.com/uploads/project/main_image/1682/main."
          title="進撃の巨人タクティクス"
          content="Goを用いたサーバサイド実装の担当"
          href="https://www.kayac.com/service/game/1682"
        />
      </div>
      <h1 className="text-4xl font-bold text-center py-4">Hobby</h1>
      <div className="lg:flex items-start container flex-wrap justify-around">
        <WorkCard
          imageUrl={LifeGameImage.src}
          title="LifeGame"
          content="Reactを用いたライフゲーム"
          href="https://lifegames.netlify.app/"
        />
        <WorkCard
          imageUrl={LGTMakerImage.src}
          title="LGTMaker"
          content="Reactを用いたLGTM画像生成"
          href="https://lgtmaker.netlify.app/"
        />
        <WorkCard
          imageUrl={ExFFTImage.src}
          title="ExFft"
          content="Elixir製高速フーリエ変換OSS"
          href="https://github.com/koyo-miyamura/ex_fft"
        />
      </div>
    </div>
  </Layout>
)

export default WorkPage
