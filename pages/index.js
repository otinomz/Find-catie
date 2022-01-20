import Head from 'next/head'
import Image from 'next/image'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import Nav from '../components/Nav/Nav'
import DefaultLayout from '../layouts/Default'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nalaa World</title>
        <meta name="description" content="find your dream cat today" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

        {/* default layout housing the nav */}
        <DefaultLayout>
          <Jumbotron/>
        </DefaultLayout>
        
    </div>
  )
}
