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
          <a href="https://github.com/Sajadmhy/gmail-clone" className={styles.card}>
            <h2>Gmail Clone App (Work in Progress)</h2>
            <p>A Gmail clone created with Next.js and Pure CSS and emojis</p>
            <Image 
              src="/gmail.png"
              width={300}
              height={170}
              alt="gmail clone project"
              />
          </a>

          <a href="http://ww-client-xi.vercel.app/" className={styles.card}>
            <h2>CRUD Exchange Orders App</h2>
            <p>A CRUD Appliation created with Next.js, MaterialUI, Nest.js and MongoDB</p>
            <Image
              src="/Crud-exchange.png"
              width={300}
              height={140}
              alt="crud exchange app"
              />
          </a>

          <a href="https://sajadmhy.github.io/location-sharing-modal" className={styles.card}>
            <h2>Location Sharing Modal</h2>
            <p>An app to save user's location with React.js, ContextAPI and Leaflet.js</p>
            <Image 
              src="/location-modal.png"
              width={300}
              height={170}
              alt="location sharing modal"
              />
          </a>

          <a href="https://sajadmhy.github.io/Battleship/" className={styles.card}>
            <h2>BattleShip Game</h2>
            <p>A game of battleship game created with HTML, CSS and JavaScript</p>
            <Image 
              src="/battleship.png"
              width={300}
              height={150}
              alt="Battleship"
              />
          </a>
          
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