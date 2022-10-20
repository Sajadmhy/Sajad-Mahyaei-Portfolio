import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Experience.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../theme/Theme'
import Head from 'next/head'

export default function Experience() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Sajad&apos;s Experience</title>
      </Head>
      <main className={styles.main}>
      <Link href="/">
      <a><span className={styles.backArrow}>&larr;</span></a>
      </Link>
        <Image
          src={theme ==='light' ? "/profile.webp" : "/batman-profile.webp"}
          width={200}
          height={200}
          alt="Sajad Mahyaei"
          priority
          />
        <h1 className={styles.title}>
          Experience <span className={styles.emoji}>💻</span>
        </h1>


        <div className={styles.grid}>

        <div className={styles.card}>
            <h2>FrontEnd Engineer Intern - <a href='https://lolo.co' target="_blank" rel="noreferrer">Lolo Co</a></h2>
            <p>
              <li>CCollaborate with designers to build a modern, responsive website to improve the user experience</li>
              <li>Developed web applications using Strapi.io to facilitate the content management for non-developer admins</li>
            </p>
          </div>

          <div className={styles.card}>
            <h2>Full Stack Engineer Apprentice - 100 Devs</h2>
            <p>
              <li>Collaborated with a team of developers to build modern, responsive web applications using best practices </li>
              <li>Developed semantically structured full-stack web applications consisting of RESTful APIs serving data to a JavaScript front-end</li>
              <li>Reviewed code and utilized unit testing, pair programming, and agile methodologies like SCRUM to guarantee quality code</li>
            </p>
          </div>

          <div className={styles.card}>
            <h2>Digital Marketing Specialist - Furlough</h2>
            <p>
              <li>Lead an SEO marketing campaign for the discord community to grow its size by 300%</li>
              <li>Managed the blog content and youtube videos for optimum exposure</li>
            </p>
          </div>

          <div className={styles.card}>
            <h2>Digital Marketing Specialist - Denxa</h2>
            <p>
              <li>Designed Instagram and Telegram growth strategy and content marketing plan</li>
              <li>Managed and nurtured Telegram community</li>
            </p>
          </div>

           <div className={styles.card}>
            <h2>Digital Marketing Intern - Sana Gostar Sabz &darr;</h2>
            <p>
              <li>Lead an off-page SEO campaign that ranked the website on the top 3 results of Google</li>
              <li>Raised brand awareness with Twitter marketing</li>
            </p>
          </div>

          <div className={styles.card}>
            <h2>Content Writer - Rekab</h2>
            <p><li>Wrote daily articles for the blog</li>
            <li>Generated copies for different ad campaigns</li>
            </p>
          </div>
          
        </div>
      </main>
      <h2 className={styles.backBtn}>
        <Link href="/">
          <a className={styles.backBtn}>&larr; Back to home</a>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href='/technologies'>
          <a className={styles.backBtn}> Continue to Technologies &rarr;</a>
        </Link>
      </h2>
    </div>
  )
}