import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Loading from './Loading'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <Loading>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>{title} | Koyo Miyamura</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
      <main className="flex flex-col items-center w-full flex-1 text-center">{children}</main>
      <footer className="flex items-center justify-center w-full h-24 border-t text-sm">
        © {new Date().getFullYear()} Koyo Miyamura
      </footer>
    </div>
  </Loading>
)

export default Layout
