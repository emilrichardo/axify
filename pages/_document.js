// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html>
      <Head>
        <title>{ process.env.projectName}</title>
        <link rel="icon" href="/images/isotipo.svg" />
        <meta name="description" content="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}