import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import AppLayout from '../components/AppLayout'

const Home = () => {
  return (
    <>
      <Head>
        <title>devtter </title>
        <meta name="description" content="This a twitter for developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        
      </AppLayout>
    </>
  )
}

export default Home;