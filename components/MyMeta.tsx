import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
}

const MyMeta = ({ title }: Props) => {
  return (
    <Head>
      <title>{title} | Koyo Miyamura</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preload" href="/images/portfolio_top.png" as="image" />
    </Head>
  )
}

export default MyMeta
