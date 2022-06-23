import Head from 'next/head'
import ChangeLang from '../components/ChangeLang'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Axyfi</h1>
      <ChangeLang/>


    </div>
  )
}
