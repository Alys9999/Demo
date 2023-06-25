import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button } from '@mui/material';

export default function First() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
        First
        </h1>

        <div className={styles.grid}>
          <a href="./first" className={styles.card}>
            <h3>One &rarr;</h3>
          </a>
        </div>
      </main>

      <footer>
        Demo!
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
