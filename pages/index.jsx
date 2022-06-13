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
          src="/profile.webp"
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
      src="/linkedin-icon.webp"
      width={40}
      height={40}
      alt="linkedin Icon"
      />
      </a>

        <a href="https://twitter.com/sajadmhy">
          <Image 
            src="/twitter-icon.webp"
            width={40}
            height={40}
            alt="twitter Icon"
            />
        </a>

        <a href="https://github.com/sajadmhy">
          <Image 
            src="/github-icon.webp"
            width={40}
            height={40}
            alt="github Icon"
            />
        </a>

        <a href="mailto:sajad.mahyaei@gmail.com">
          <Image 
            src="/gmail-icon.webp"
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

          <Link href="https://sajad-mahyaei-portfolio.sajadmhy.repl.co/projects">
          <a className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Learn about my ongoing projects and technologies!</p>
          </a>
          </Link>

          <Link href="https://sajad-mahyaei-portfolio.sajadmhy.repl.co/experience">
          <a className={styles.card}>
            <h2>Experience &rarr;</h2>
            <p>My Experience working with different projects and clients</p>
          </a>
          </Link>

          <Link href="https://sajad-mahyaei-portfolio.sajadmhy.repl.co/technologies">
          <a className={styles.card}>
            <h2>Technologies &rarr;</h2>
            <p>
              Technologies and stack that I have experience working with
            </p>
          </a>
          </Link>
          
        </div>
      </main>
      
      <footer className={styles.footer}>
        <a
          href="https://sajad-mahyaei-portfolio.sajadmhy.repl.co/"

        >
          Made with ❤️ by Sajad Mahyaei
        </a>
      </footer>
    </div>
  )
}
