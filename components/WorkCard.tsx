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
      <img src={imageUrl} alt="key visual" className="border-b w-full md:h-32 lg:h-64 object-cover object-top" />
      <div className="p-4">
        <h3 className="sm:text-lg md:text-base lg:text-lg font-medium my-2">{title}</h3>
        <p className="sm:text-base md:text-sm lg:text-base text-justify text-gray-500">{content}</p>
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
    content: 'Railsサーバ実装/運用',
    href: 'https://biz.moneyforward.com/',
  },
  {
    title: 'ぼくらの甲子園！ポケット',
    imageUrl: 'https://www.kayac.com/uploads/project/main_image/1188/d2e90e04-3865-4557-b184-580793a4c976.',
    content: 'Perl5サーバ/運用/リーダ',
    href: 'https://www.kayac.com/service/game/1188',
  },
  {
    title: '進撃の巨人タクティクス',
    imageUrl: 'https://www.kayac.com/uploads/project/main_image/1682/main.',
    content: 'Goサーバ実装/運用',
    href: 'https://www.kayac.com/service/game/1682',
  },
  {
    title: 'Elixir業務システム開発',
    imageUrl: 'images/default.png',
    content: 'Phoenix LiveView フルスタック(副業)',
    href: 'https://elixir-lang.org/',
  },
  {
    title: 'React Native 業務システム開発',
    imageUrl: 'images/default.png',
    content: 'React Native スマホアプリ(副業)',
    href: 'https://koyo-miyamura.vercel.app/',
  },
  {
    title: 'Bright',
    imageUrl: 'https://bright-fun.org/wp-content/uploads/2023/10/ogp_a-1.png',
    content: 'Phoenix LiveView フルスタック(副業)',
    href: 'https://bright-fun.org/',
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
    content: 'Gatsby製AmazonのURL短縮',
    href: 'https://amazon-url-converter.netlify.app',
  },
  {
    imageUrl: BrainSlotImage.src,
    title: 'BrainSlot',
    content: 'Vue製ブレストスロット',
    href: 'https://brain-slot.netlify.com',
  },
  {
    imageUrl: QiitaSearchImage.src,
    title: 'QiitaSearch',
    content: 'Vue製Qiita検索アプリ',
    href: 'https://qiita-search.netlify.com',
  },
  {
    imageUrl: ExFFTImage.src,
    title: 'ExFft',
    content: 'Elixir高速フーリエ変換',
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
