import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GitHubProvider } from '../Context/GitHubContext'
import Base from '../Components/Base'
import GlobalStyle from '../globalStyles';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Code Group</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Code Group" />
      </Head>
      <GlobalStyle />
      <Base>
        <GitHubProvider>
          <Component {...pageProps} />
        </GitHubProvider>
      </Base>
    </>
  )
}

export default App
