import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'tailwindcss/tailwind.css'
import { HexButton } from '../components/hexButton';


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
          We are a team of trade Management Experts
          How can we help?
        </p>

        
        <div className={styles.grid}>

          <a href="./planningExepert" className={styles.card}>
            <h3>Planning Expert</h3>
          </a>

          

          <a href="" className={styles.card}>
            <h3>Supplier Manager</h3>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3>Custom Expert</h3>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3>Documentation Expert</h3>

          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3>Analytics Expert</h3>

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
