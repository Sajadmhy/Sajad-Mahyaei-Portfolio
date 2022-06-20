import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sajad Mahyaei</title>
        <meta property="og:url" content="https://sajad.codes/"/>

        <meta name="description" content="A Digital Marketer turned Front End Software Engineer." />
        <link rel="icon" href="/favicon.png" />        
      
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sajad Mahyaei"/>
        <meta property="og:description" content="A Digital Marketer turned Front End Software Engineer."/>
        <meta property="og:image" content="/favicon.png"/>

      </Head>

      <main className={styles.main}>
        <Image
          src="/profile.webp"
          width={200}
          height={200}
          alt="Sajad Mahyaei"
          priority
          />
        <h1 className={styles.title}>
          Hi there <span className={styles.emoji}>👋</span>
        </h1>

        <p className={styles.description}>
          I&apos;m Sajad, a MERN stack Software Engineer
        </p>

<div className={styles.icons}>
      <a target="_blank" rel="noreferrer"  href="https://linkedin.com/in/sajadmhy">
    <Image 
      src="/linkedin-icon.webp"
      width={40}
      height={40}
      alt="linkedin Icon"
      priority
      />
      </a>

        <a target="_blank" rel="noreferrer" href="https://twitter.com/sajadmhy">
          <Image 
            src="/twitter-icon.webp"
            width={40}
            height={40}
            alt="twitter Icon"
            priority
            />
        </a>

        <a target="_blank" rel="noreferrer" href="https://github.com/sajadmhy">
          <Image 
            src="/github-icon.webp"
            width={40}
            height={40}
            alt="github Icon"
            priority
            />
        </a>

        <a href="mailto:hi@sajad.codes">
          <Image 
            src="/email-icon.webp"
            width={40}
            height={40}
            alt="Email Icon"
            priority
            />
        </a>

  <a href="/Sajad-Mahyaei-Web-Dev.pdf" download>
          <Image 
            src="/resume-icon.png"
            width={35}
            height={35}
            alt="resume Icon"
            priority
            />
        </a>
      </div>
        
        <div className={styles.grid}>
          
          <Link href="/bio">
          <a className={styles.card}>
            <h2>Biography &rarr;</h2>
            <p>Find in-depth information about Sajad Mahyaei</p>
          </a>
          </Link>

          <Link href="/projects">
          <a className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Learn about my ongoing projects and technologies!</p>
          </a>
          </Link>

          <Link href="/experience">
          <a className={styles.card}>
            <h2>Experience &rarr;</h2>
            <p>My Experience working with different projects and clients</p>
          </a>
          </Link>

          <Link href="/technologies">
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
        <Link href="/">
        <a>
          Made with ❤️ by Sajad Mahyaei
        </a>
        </Link>
      </footer>
    </div>
  )
}
