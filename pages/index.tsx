import React from 'react'
import Layout from 'components/Layout'
import { Timeline, TimelineContent } from 'components/Timeline'
import TopImage from 'public/images/portfolio_top.png'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

  const TimelineLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} className="border-b border-blue-300">
      {children}
      <FontAwesomeIcon icon={faExternalLinkAlt} className="mx-2" />
    </a>
  )

  const timelines: TimelineContent[] = [
    {
      period: '2013/04 - 2017/03',
      title: '九州大学電気情報工学科',
      content: (
        <>
          電気と情報学を統合的に学ぶ。
          <br />
          在学中フィリピンにて1ヶ月の語学留学を通じて英会話を習得。
          <br />
          卒論ではパフォーマンスカウンタの値を Python + Scikit-learn
          にて分析し実行中のプログラムを推定する研究を行なった。
        </>
      ),
    },
    {
      period: '2018/07 -',
      title: 'Elixirコミュニティ fukuoka.ex に所属',
      content: (
        <>
          プログラミング言語Elixirのコミュニティであるfukuoka.exに所属して活動。
          <br />
          コミュニティメンバーとして
          <TimelineLink href="https://pr.forkwell.com/2018-12-07-community_lovers/">
            forkwell からインタビューを受けた。
          </TimelineLink>
          <br />
          高速フーリエ変換を行う <TimelineLink href="https://github.com/koyo-miyamura/ex_fft">ExFft</TimelineLink> や
          PHPライクにAPI / REST API / Web開発ができる
          <TimelineLink href="https://github.com/piacerex/shotrize">Shotrize</TimelineLink>
          へのコントリビュートなどの活動を行う
          <br />
        </>
      ),
    },
    {
      period: '2017/04 - 2019/03',
      title: '九州大学大学院システム情報科学府',
      content: (
        <>
          情報学を専門的に学ぶ。
          <br />
          <TimelineLink href="https://fusic.co.jp/doings/177">在学中「株式会社Fusic」にて1ヶ月インターン</TimelineLink>
          を行いCakePHP3 を用いた面接管理システムの開発を行った。
          <br />
          修士論文ではBLE (Bluetooth Low Energy)
          からの信号群をパーティクルフィルタによって推定を行う屋内測位アプリケーションの研究を行なった。
        </>
      ),
    },
    {
      period: '2019/04 - 2021/08',
      title: '面白法人カヤック',
      content: (
        <>
          <TimelineLink href="https://www.kayac.com/team/miyamura-koyo">
            ゲーム事業部 サーバサイドエンジニア
          </TimelineLink>
          として「進撃の巨人タクティクス」や「ぼくらの甲子園ポケット」の開発を行う。
          <br />
          また、「ぼくらの甲子園ポケット」ではサーバチームのリーダとしてスケジュール・リソース調整や新規メンバーのジョインなどを行う。
        </>
      ),
    },
    {
      period: '2019/04 - 2020/11',
      title: '面白法人カヤック 「進撃の巨人タクティクス」',
      content: (
        <>
          Goを用いて
          <TimelineLink href="https://www.kTimelineLinkyac.com/service/game/1682">進撃の巨人タクティクス</TimelineLink>
          のサーバサイドを担当。
          <br />
          クリーンアーキテクチャをベースとし、MySQLのレプリケーションに加えてシャーディングまで行われているアプリケーションにおいて、クエリ効率を意識しつつ高負荷環境でも動作するアプリケーションにキャッチアップしつつ新規機能の開発を行った。
          <br />
          また、管理画面などではVue.jsを使用した。
          <br />
          代表的な開発物としては「バトルクリアタイムのランキング」機能。
          <br />
          また、サービスのクローズ決定後は社内のインフラ担当と連携しつつ、協業企業の担当者とやりとりを行い、アプリケーション担当としては一人でクローズ対応を取りまとめた。
        </>
      ),
    },
    {
      period: '2020/05 - 2021/08',
      title: '面白法人カヤック 「ぼくらの甲子園ポケット」',
      content: (
        <>
          Perl5を用いて
          <TimelineLink href="https://www.kayac.com/service/game/1188">ぼくらの甲子園ポケット</TimelineLink>
          のサーバサイドを担当。2021年1月から
          <TimelineLink href="https://techblog.kayac.com/server-leader-exp">サーバチームのリーダー</TimelineLink>
          を担当。
          <br />
          8年以上開発されているシステムの技術的負債と格闘しつつ新規開発・運用を行なった。その中で
          <TimelineLink href="https://news.koshien-pocket.kayac.com/post/653313370554023936/%E3%81%BC%E3%81%8F%E3%83%9D%E3%82%B1%E3%81%A8%E3%81%8F%E3%83%80%E3%83%8D-%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%89%E7%B5%B1%E5%90%88%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%80%E3%81%A3%E3%81%A1%E3%83%BCd%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%93%E3%83%A5%E3%83%BC%E7%B7%A8">
            サーバ統合プロジェクト
          </TimelineLink>
          をチームで行い、リーダーとしてメイン担当のチームメンバーが統合作業に集中できるよう、スケジュール・リソース調整や新規ジョインメンバーサポート、設計・コードレビューなどを行った。
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
          Ruby on Rails を用いたToB向けSaaS開発
          <br />
        </>
      ),
    },
  ]

  return (
    <Layout title="Home">
      <IndexTopImage />
      <div className="px-0 md:px-5">
        <h1 className="text-4xl font-medium text-center p-2 mb-8">Experience</h1>
        <Timeline timelineContents={timelines} />
      </div>
    </Layout>
  )
}

export default IndexPage
