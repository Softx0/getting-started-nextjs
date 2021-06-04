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
        <h1 className={styles.title}>
          <a className={styles.devter} href="https://nextjs.org">Devtter</a>
          <nav>
            <Link className={styles.devit} href="/devit">
              <a>Timelines</a>
            </Link>
          </nav>
        </h1>
      </AppLayout>
    </>
  )
}

export default Home;