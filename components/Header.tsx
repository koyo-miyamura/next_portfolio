import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-end flex-wrap max-w-screen-lg m-auto py-2 lg:p-6 overflow-x-scroll whitespace-nowrap">
        <div className="w-full lg:flex lg:items-center lg:w-auto">
          <Link href="/">
            <a className="inline-block text-gray-700 font-medium px-6 py-2 leading-none hover:opacity-50 lg:mt-0">
              Home
            </a>
          </Link>
          |
          <Link href="/about">
            <a className="inline-block text-gray-700 font-medium px-6 py-2 leading-none hover:opacity-50 lg:mt-0">
              About
            </a>
          </Link>
          |
          <a
            href="https://github.com/koyo-miyamura"
            className="inline-block text-gray-700 font-medium text-lg px-6 py-2 leading-none hover:opacity-50 lg:mt-0"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          |
          <a
            href="https://twitter.com/koyomiyamura"
            className="inline-block text-gray-700 font-medium text-lg px-6 py-2 leading-none hover:opacity-50 lg:mt-0"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
