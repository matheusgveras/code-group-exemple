import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GitHubProvider } from '../Context/GitHubContext'
import Base from '../Components/Base'
import GlobalStyle from '../globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import 'react-toastify/dist/ReactToastify.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Code Group</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Code Group" />
      </Head>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Base>
        <GitHubProvider>
          <Component {...pageProps} />
        </GitHubProvider>
      </Base>
      </ThemeProvider>
    </>
  )
}

export default App
