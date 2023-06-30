import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function PlanningExepert() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
        PlanningExepert
        </h1>

        <div className={styles.grid}>
          <a href="./chat" className={styles.card}>
            <h3>chat &rarr;</h3>
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
