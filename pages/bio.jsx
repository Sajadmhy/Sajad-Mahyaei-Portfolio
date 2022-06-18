import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Bio.module.css'

export default function Bio() {
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
          Biography <span className={styles.emoji}>📝</span>
        </h1>


        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Education &darr;</h2>
            <p><li>Sampad High School </li>
            <li>Bu-ali Sina University (Eng.)</li>
              <li>K.N Toosi University (Eng.)</li>
            </p>
          </div>

          <div className={styles.card}>
            <h2>Coding Education &darr;</h2>
            <p><li>LinkedIn Learning</li>
              <li>The Odin Project Boot Camp</li>
              <li>100 Devs</li>
            </p>
          </div>

          <div className={styles.card}>
            <h2>Hobbies &darr;</h2>
            <p><li>Building Web Apps</li>
            <li>Networking</li>
              <li>Learning new Techs</li>
              <li>Designing Logos</li>
            </p>
          </div>

           <div className={styles.card}>
            <h2>Fun Facts &darr;</h2>
            <p><li>Harry Potter fan</li>
            <li>Love helping people</li>
              <li>OCD/ADHD pal</li>
              <li>Love Batman</li>
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