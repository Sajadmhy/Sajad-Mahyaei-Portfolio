import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Bio.module.css'

export default function Technologies() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Image
          src="/profile.webp"
          width={200}
          height={200}
          alt="Sajad Mahyaei"
          priority
          />
        <h1 className={styles.title}>
          Technologies <span className={styles.emoji}>🔧</span>
        </h1>


        <div className={styles.grid}>
          
          <div className={styles.card}>
            <h2>Front End Techs &darr;</h2>
            <p><li>HTML5</li>
            <li>CSS3</li>
              <li>JavaScript</li>
              <li>React.js / Hooks / Context</li>
              <li>Next.js</li>
              <li>MaterialUI</li>
              <li>TailwindCSS</li>
            </p>
          </div>

          <div className={styles.card}>
            <h2>Back End Techs &darr;</h2>
            <p><li>Node.js</li>
              <li>Express.js</li>
              <li>GraphQL</li>
              <li>RestAPI</li>
              <li>Nest.js</li>
              <li>MongoDB</li>
              <li>TypeScript</li>
            </p>
          </div>

          <div className={styles.card}>
            <h2>Others &darr;</h2>
            <p><li>Git</li>
            <li>Jest</li>
              <li>NPM</li>
            </p>
          </div>
          
        </div>
      </main>
      <h2>
        <Link href="/">
          <a className={styles.backBtn}>&larr; Back to home</a>
        </Link>
      </h2>
    </div>
  )
}