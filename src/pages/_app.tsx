import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '@modules/Sidebar/Sidebar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
