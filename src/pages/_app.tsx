import type { AppProps } from 'next/app'
import Head from 'next/head'


// CONTEXTS
import { GitHubProvider } from '../Context/GitHubContext'
import Base from '../Components/Base'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Code Group</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Code Group" />
      </Head>
      <Base>
        <GitHubProvider>
          <Component {...pageProps} />
        </GitHubProvider>
      </Base>
    </>
  )
}

export default App
