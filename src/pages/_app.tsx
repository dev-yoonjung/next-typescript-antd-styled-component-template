import type { AppProps } from 'next/app'

import withTheme from '../../theme'

import GlobalStyle from '@/styles/global-style'

export default function App({ Component, pageProps }: AppProps) {
  return withTheme(
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>,
  )
}
