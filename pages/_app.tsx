import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CTI Muebles – Catálogo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Catálogo minimalista de diseño de muebles, con precios en ARS." />
        <meta property="og:title" content="CTI Muebles – Catálogo" />
        <meta property="og:description" content="Diseño de muebles minimalista. Consultá precios y compartí en redes." />
        <meta property="og:image" content="/og-cover.png" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
