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

<div className={styles.icons}>
      <a href="https://linkedin.com/in/sajadmhy">
    <Image 
      src="/linkedin-icon.png"
      width={40}
      height={40}
      alt="linkedin Icon"
      />
      </a>

        <a href="https://twitter.com/sajadmhy">
          <Image 
            src="/twitter-icon.png"
            width={40}
            height={40}
            alt="twitter Icon"
            />
        </a>

        <a href="https://github.com/sajadmhy">
          <Image 
            src="/github-icon.png"
            width={40}
            height={40}
            alt="github Icon"
            />
        </a>

        <a href="mailto:sajad.mahyaei@gmail.com">
          <Image 
            src="/gmail-icon.png"
            width={40}
            height={40}
            alt="Gmail Icon"
            />
        </a>
      </div>
        
        <div className={styles.grid}>
          <Link href="https://sajad-mahyaei-portfolio.sajadmhy.repl.co/bio">
          <a className={styles.card}>
            <h2>Biography &rarr;</h2>
            <p>Find in-depth information about Sajad Mahyaei</p>
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
            <p>My Experience working with different projects and clients</p>
          </a>

          <a
            href="https://sajad-mahyaei-portfolio.sajadmhy.repl.co/technologies"
            className={styles.card}
          >
            <h2>Technologies &rarr;</h2>
            <p>
              Technologies and stack that I have experience working with
            </p>
          </a>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <a
          href="https://sajad-mahyaei-portfolio.sajadmhy.repl.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by Sajad Mahyaei
        </a>
      </footer>
    </div>
  )
}
