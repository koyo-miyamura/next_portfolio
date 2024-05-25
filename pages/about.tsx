import React from 'react'
import Layout from '@/components/Layout'
import ProfileCard from '@/components/ProfileCard'

const AboutPage = () => {
  return (
    <Layout title="About">
      <ProfileCard>
        新卒で面白法人カヤックに入社。GoやPerl5で2年半ほどゲームサーバを書く。
        <br />
        現在はマネーフォワードの社員としてRuby + Rails用いてMFクラウドシリーズの開発を行う。
        <br />
        趣味でフロントエンド開発も行っており、このポートフォリオもReact + Next.jsにて実装。
        <br />
        またプログラミング言語Elixirのコミュニティfukuoka.exに所属し、副業で実務でElixirを書きつつOSSコントリビュートなどを行っている。
      </ProfileCard>
    </Layout>
  )
}

export default AboutPage
