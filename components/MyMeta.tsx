import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
}

const MyMeta = ({ title }: Props) => {
  return (
    <Head>
      <title>{title} | Koyo Miyamura</title>

      <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#cb566c" />
      <meta name="apple-mobile-web-app-title" content="Portfolio" />
      <meta name="application-name" content="Portfolio" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <meta property="og:url" content="https://koyo-miyamura.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Portfolio | Koyo Miyamura" />
      <meta property="og:site_name" content="Portfolio | Koyo Miyamura" />
      <meta property="og:description" content="Koyo Miyamura のポートフォリオ" />
      <meta property="og:image" content="https://koyo-miyamura.vercel.app/images/momizi_icon.png" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="twitter:card" content="ポートフォリオ" />
      <meta property="twitter:title" content="Portfolio | Koyo Miyamura" />
      <meta property="twitter:description" content="Koyo Miyamura のポートフォリオ" />
      <meta property="twitter:image" content="https://koyo-miyamura.vercel.app/images/momizi_icon.png" />
      <link rel="canonical" href="https://koyo-miyamura.vercel.app/" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link rel="preload" href="/images/portfolio_top.png" as="image" />
    </Head>
  )
}

export default MyMeta
