import React from 'react'
import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { useNProgress } from 'lib/hooks/useNProgress'

function MyApp({ Component, pageProps }: AppProps) {
  useNProgress()

  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
