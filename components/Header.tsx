import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  const HeaderLink = ({ linkName, href }: { linkName: string; href: string }) => (
    <Link href={href}>
      <a className="inline-block text-gray-700 font-medium px-6 py-2 leading-none my-hover-border hover:text-momizi lg:mt-0">
        {linkName}
      </a>
    </Link>
  )
  return (
    <header>
      <nav className="flex items-center justify-end flex-wrap max-w-screen-lg m-auto py-2 lg:p-6 overflow-x-scroll md:overflow-x-visible whitespace-nowrap w-full">
        <div className="w-full lg:flex lg:items-center lg:w-auto">
          <HeaderLink linkName="Home" href="/" />|
          <HeaderLink linkName="About" href="/about" />|
          <HeaderLink linkName="Work" href="/work" />|
          <a
            href="https://github.com/koyo-miyamura"
            className="inline-block text-gray-700 font-medium text-xl px-6 py-2 leading-none transform my-hover-border hover:scale-125 hover:text-momizi lg:mt-0"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          |
          <a
            href="https://twitter.com/koyomiyamura"
            className="inline-block text-gray-700 font-medium text-xl px-6 py-2 leading-none transform my-hover-border hover:scale-125 hover:text-momizi lg:mt-0"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
