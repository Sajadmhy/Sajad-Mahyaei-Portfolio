import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sajad Mahyaei Portfolio</title>
        <meta name="description" content="Made by Next.js with Love" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/profile.png"
          width={200}
          height={200}
          alt="Sajad Mahyaei"
          />
        <h1 className={styles.title}>
          Hi there <span className={styles.emoji}>👋</span>
        </h1>

        <p className={styles.description}>
          I'm Sajad, a MERN stack Software Engineer
        </p>

        <div className={styles.grid}>
          <Link href="https://sajad-mahyaei-portfolio.sajadmhy.repl.co/bio">
          <a className={styles.card}>
            <h2>Biography &rarr;</h2>
            <p>Find in-depth information about Sajad</p>
          </a>
          </Link>

          <a href="https://sajad-mahyaei-portfolio.sajadmhy.repl.co/projects" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Learn about my ongoing projects and technologies!</p>
          </a>

          <a
            href="https://sajad-mahyaei-portfolio.sajadmhy.repl.co/experience"
            className={styles.card}
          >
            <h2>Experience &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://sajad-mahyaei-portfolio.sajadmhy.repl.co/technologies"
            className={styles.card}
          >
            <h2>Technologies &rarr;</h2>
            <p>
              After running, this repl is automatically deployed on replit!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel
            and Replit
        </a>
      </footer>
    </div>
  )
}
