import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Demo
        </h1>

        <p className={styles.description}>
          Just a Demo
        </p>

        <div className={styles.grid}>
          <a href="./first" className={styles.card}>
            <h3>First &rarr;</h3>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Second &rarr;</h3>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Third &rarr;</h3>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Forth &rarr;</h3>

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
