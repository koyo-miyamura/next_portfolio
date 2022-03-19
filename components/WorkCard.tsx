import React from 'react'
import LifeGameImage from 'public/images/lifegame.png'
import LGTMakerImage from 'public/images/lgtmaker.png'
import ExFFTImage from 'public/images/exfft.png'
import ShotrizeImage from 'public/images/shotrize.png'
import AmazonUrlConverterImage from 'public/images/amazon_url_converter.png'
import BrainSlotImage from 'public/images/brain_slot.png'
import EpsonImage from 'public/images/epson.jpg'
import QiitaSearchImage from 'public/images/qiita_search.png'

export type Props = {
  title?: string
  content?: string
  imageUrl?: string
  href?: string
}

export const WorkCard = ({ title = '', content = '', imageUrl = '', href = '' }: Props) => (
  <div className="my-8 mx-0 md:w-3/10 shadow-md hover:sdow-lg hover:bg-gray-100 rounded-lg bg-white">
    <a href={href}>
      <div className="relative pt-9/16 overflow-hidden">
        <img src={imageUrl} alt="key visual" className="absolute top-0 left-0" />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg my-2">{title}</h3>
        <p className="text-justify text-gray-500">{content}</p>
      </div>
    </a>
  </div>
)

const CardSection = ({ cardData }: { cardData: Props[] }) => {
  return (
    <>
      {cardData.map(({ title, imageUrl, content, href }, i) => (
        <WorkCard key={String(i)} title={title} imageUrl={imageUrl} content={content} href={href} />
      ))}
    </>
  )
}

const workCardData: Props[] = [
  {
    title: 'マネーフォワードクラウド',
    imageUrl: 'https://biz.moneyforward.com/portal/images/ogp/common/img_moneyforward_cloud.png',
    content: 'Railsサーバサイド実装/運用',
    href: 'https://biz.moneyforward.com/',
  },
  {
    title: 'ぼくらの甲子園！ポケット',
    imageUrl: 'https://www.kayac.com/uploads/project/main_image/1188/main.',
    content: 'Perl5サーバサイド実装/運用/リーダー',
    href: 'https://www.kayac.com/service/game/1188',
  },
  {
    title: '進撃の巨人タクティクス',
    imageUrl: 'https://www.kayac.com/uploads/project/main_image/1682/main.',
    content: 'Goサーバサイド実装/運用',
    href: 'https://www.kayac.com/service/game/1682',
  },
]

const hobbyCardData: Props[] = [
  {
    imageUrl: LifeGameImage.src,
    title: 'LifeGame',
    content: 'React製ライフゲーム',
    href: 'https://lifegames.netlify.app/',
  },
  {
    imageUrl: LGTMakerImage.src,
    title: 'LGTMaker',
    content: 'React製LGTM画像生成',
    href: 'https://lgtmaker.netlify.app/',
  },
  {
    imageUrl: AmazonUrlConverterImage.src,
    title: 'Amazon URL Converter',
    content: 'Gatsby.js製AmazonのURL短縮',
    href: 'https://amazon-url-converter.netlify.app',
  },
  {
    imageUrl: BrainSlotImage.src,
    title: 'BrainSlot',
    content: 'Vue製のブレインストーミングスロット',
    href: 'https://brain-slot.netlify.com',
  },
  {
    imageUrl: QiitaSearchImage.src,
    title: 'QiitaSearch',
    content: 'Vue製のQiita検索アプリ',
    href: 'https://qiita-search.netlify.com',
  },
  {
    imageUrl: ExFFTImage.src,
    title: 'ExFft',
    content: 'Elixir製高速フーリエ変換OSS',
    href: 'https://github.com/koyo-miyamura/ex_fft',
  },
  {
    imageUrl: ShotrizeImage.src,
    title: 'Shotrize',
    content: 'Elixir製OSSへのコントリビュート',
    href: 'https://github.com/piacerex/shotrize/tree/v1.0',
  },
  {
    imageUrl: EpsonImage.src,
    title: 'Epson Hack Trek',
    content: 'Elixirサーバでハッカソン受賞',
    href: 'https://github.com/koyo-miyamura/epson_connectex',
  },
  {
    imageUrl: 'https://i1.sndcdn.com/artworks-pnEoIb1C8WPtHAcZ-FkLxIA-t500x500.jpg',
    title: '面白法人カヤック採用Podcast',
    content: '新卒採用Podcast出演',
    href: 'https://soundcloud.com/user-913017633/8a-1',
  },
]

export const WorkCardSection = () => <CardSection cardData={workCardData} />
export const HobbyCardSection = () => <CardSection cardData={hobbyCardData} />
