import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Bio.module.css'

export default function Projects() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Image
          src="/profile.png"
          width={200}
          height={200}
          alt="Sajad Mahyaei"
          />
        <h1 className={styles.title}>
          Projects <span className={styles.emoji}>🚀</span>
        </h1>


        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Biography &rarr;</h2>
            <p>Find in-depth information about Sajad</p>
          </div>

          <div className={styles.card}>
            <h2>Biography &rarr;</h2>
            <p>Find in-depth information about Sajad</p>
          </div>

          <div className={styles.card}>
            <h2>Biography &rarr;</h2>
            <p>Find in-depth information about Sajad</p>
          </div>

          <div className={styles.card}>
            <h2>Biography &rarr;</h2>
            <p>Find in-depth information about Sajad</p>
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