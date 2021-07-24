import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <header className="mt-2 mb-6">
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
        <a href="https://github.com/koyo-miyamura">
          <FontAwesomeIcon icon={faGithub} />
        </a>{' '}
        |{' '}
        <a href="https://twitter.com/koyomiyamura">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </nav>
    </header>
  )
}

export default Header
