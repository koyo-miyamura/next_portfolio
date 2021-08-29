import React from 'react'
import MomiziIcon from 'public/images/momizi_icon_512_512.png'

type Props = {
  children: React.ReactNode
}

const ProfileCard = ({ children }: Props) => {
  return (
    <div className="container flex justify-center pt-24 pb-6">
      <div className="bg-white shadow-xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6">
        <div className="flex justify-center">
          <div className="rounded-full -mt-20 w-36 h-36 shadow-2xl border-4 border-white">
            <img src={MomiziIcon.src} alt="profile" className="p-2" />
          </div>
        </div>

        <div className="mt-8">
          <h1 className="font-bold text-center text-4xl text-gray-900">Koyo Miyamura</h1>
          <div className="mt-2">
            <p className="text-center text-sm text-gray-400 font-medium">Engineer</p>
          </div>
          <div className="mt-4">
            <p className="text-sky-100 block text-center font-medium leading-6 px-6 py-3 bg-sky-600">
              Contact with <span className="font-bold">@koyo-miyamura</span>
            </p>
          </div>
          <div className="flex justify-evenly">
            <a
              href="https://twitter.com/koyomiyamura"
              className="bg font-bold text-blue-400 w-full text-center py-3 hover:bg-blue-400 hover:text-white hover:shadow-lg"
            >
              Twitter
            </a>
            <a
              href="https://github.com/koyo-miyamura"
              className="bg font-bold text-gray-600 w-full text-center py-3 hover:bg-gray-600 hover:text-white hover:shadow-lg"
            >
              GitHub
            </a>
            <a
              href="https://qiita.com/koyo-miyamura"
              className="bg font-bold text-green-500 w-full text-center py-3 hover:bg-green-500 hover:text-white hover:shadow-lg"
            >
              Qiita
            </a>
          </div>

          <div className="w-full p-4 text-gray-800">
            <h3 className="font-bold text-left text-xl">Profile</h3>
            <div className="mt-2 w-full">
              <p className="text-sm">{children}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
