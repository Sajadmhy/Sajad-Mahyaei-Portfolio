import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Bio.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../theme/Theme'

export default function Bio() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={styles.container}>

      <main className={styles.main}>
      <Link href="/">
      <a><span className={styles.backArrow}>&larr;</span></a>
      </Link>
        <Image
          src={theme ==='light' ? "/profile.webp" : "/batman-profile.png"}
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
              <li>{theme === 'light' ? 'Designing Logos' : 'Riding Batmobile'}</li>
            </p>
          </div>

           <div className={styles.card}>
            <h2>Fun Facts &darr;</h2>
            <p><li>Harry Potter {theme === 'light' ? '' : 'is my'} fan</li>
            <li>Love {theme === 'light' ? 'helping people' : 'catching criminals'}</li>
              <li>OCD/ADHD pal</li>
              <li>Love {theme === 'light' ? 'Batman' : 'Myself'}</li>
            </p>
          </div>
          
        </div>
      </main>
      <h2>
        <Link href="/">
          <a className={styles.backBtn}>&larr; Back to home</a>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href='/projects'>
          <a className={styles.backBtn}> Continue to Projects &rarr;</a>
        </Link>
      </h2>
    </div>
  )
}