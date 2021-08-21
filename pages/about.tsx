import React from 'react'
import Layout from 'components/Layout'
import MomiziIcon from 'public/images/momizi_icon_512_512.png'

const AboutPage = () => {
  const ProfileCard = () => (
    <div className="container pt-24 pb-6">
      <div className="bg-white relative shadow-xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto">
        <div className="flex justify-center">
          <div className="rounded-full absolute -top-20 w-36 h-36 shadow-2xl border-4 border-white">
            <img src={MomiziIcon.src} alt="profile" className="p-2" />
          </div>
        </div>

        <div className="mt-20">
          <h1 className="font-bold text-center text-3xl text-gray-900">Koyo Miyamura</h1>
          <p className="text-center text-sm text-gray-400 font-medium">Engineer</p>
          <div className="my-5">
            <p className="text-sky-100 block text-center font-medium leading-6 px-6 py-3 bg-sky-600">
              Contact with <span className="font-bold">@koyo-miyamura</span>
            </p>
          </div>
          <div className="flex justify-evenly my-5">
            <a
              href="https://twitter.com/koyomiyamura"
              className="bg font-bold text-sm text-blue-400 w-full text-center py-3 hover:bg-blue-400 hover:text-white hover:shadow-lg"
            >
              Twitter
            </a>
            <a
              href="https://github.com/koyo-miyamura"
              className="bg font-bold text-sm text-gray-600 w-full text-center py-3 hover:bg-gray-600 hover:text-white hover:shadow-lg"
            >
              GitHub
            </a>
          </div>

          <div className="w-full p-4 text-gray-800">
            <h3 className="font-bold text-left">Profile</h3>
            <div className="mt-5 w-full">
              <p className="text-sm">
                新卒で面白法人カヤックに入社。 GoやPerl5で2年半ほどゲームサーバを書く。
                <br />
                現在はマネーフォワードの社員としてRuby + Railsを用いたSaaS開発を行う。
                <br />
                趣味でフロントエンド開発も行っており、このポートフォリオもReact + Next.jsにて実装。
                <br />
                またプログラミング言語Elixirのコミュニティfukuoka.exに所属しOSSコントリビュートなどの活動を行っている。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <Layout title="About">
      <ProfileCard />
    </Layout>
  )
}

export default AboutPage
