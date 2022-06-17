import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Bio.module.css'
import { useState } from 'react'

export default function Projects() {

  const [showButtons, setShowButtons] = useState([false,false,false,false]);

  function handleShow(index) {
    const btns = [...showButtons]
    btns[index]=true;
    setShowButtons(btns);
  }

  function handleHide(index) {
    const btns = [...showButtons]
    btns[index] = false;
    setShowButtons(btns);
  }
  
  
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
          
          <div className={styles.card} onMouseEnter={() => handleShow(0)} onMouseLeave={() => handleHide(0)}>
            <h2>Gmail Clone App</h2>
            <p>A Gmail clone created with Next.js and Pure CSS and emojis</p>
            <Image 
              src="/gmail.png"
              width={300}
              height={170}
              alt="gmail clone project"
              />
            <div className={styles.btns} style={{display: showButtons[0] ? 'flex' : 'none'}} >
              <a target="_blank" rel="noreferrer" href="https://github.com/Sajadmhy/gmail-clone" className={styles.code}>
            <button>Code</button></a>
            <a target="_blank" rel="noreferrer" href="https://main--deluxe-churros-437829.netlify.app/" className={styles.preview}>            
            <button>Preview</button></a>
            </div>
            
          </div>

          <div className={styles.card} onMouseEnter={() => handleShow(1)} onMouseLeave={() => handleHide(1)}>
            <h2>CRUD Exchange Orders App</h2>
            <p>A CRUD Application created with Next.js, MaterialUI, Nest.js and MongoDB</p>
            <Image
              src="/Crud-exchange.png"
              width={300}
              height={110}
              alt="crud exchange app"
              />
            <div className={styles.btns} style={{display: showButtons[1] ? 'flex' : 'none'}} >
            <a target="_blank" rel="noreferrer" href="https://github.com/Sajadmhy/WW-client" className={styles.code}>
            <button>Code</button></a>
            <a target="_blank" rel="noreferrer" href="https://stately-zabaione-b81df0.netlify.app/" className={styles.preview}>            
            <button>Preview</button></a>
            </div>
          </div>

          <div className={styles.card} onMouseEnter={() => handleShow(2)} onMouseLeave={() => handleHide(2)}>
            <h2>Location Sharing Modal</h2>
            <p>An app to save a user's location with React.js, ContextAPI and Leaflet.js</p>
            <Image 
              src="/location-modal.png"
              width={300}
              height={170}
              alt="location sharing modal"
              />
            <div className={styles.btns} style={{display: showButtons[2] ? 'flex' : 'none'}} >
            <a target="_blank" rel="noreferrer" href="https://github.com/Sajadmhy/location-sharing-modal" className={styles.code}>
            <button>Code</button></a>
            <a target="_blank" rel="noreferrer" href="https://sajadmhy.github.io/location-sharing-modal" className={styles.preview}>            
            <button>Preview</button></a>
            </div>
          </div>

          <div className={styles.card} onMouseEnter={() => handleShow(3)} onMouseLeave={() => handleHide(3)}>
            <h2>BattleShip Game</h2>
            <p>A game of battleship game created with HTML, CSS and JavaScript</p>
            <Image 
              src="/battleship.png"
              width={300}
              height={150}
              alt="Battleship"
              />
            <div className={styles.btns} style={{display: showButtons[3] ? 'flex' : 'none'}} >
            <a target="_blank" rel="noreferrer" href="https://github.com/Sajadmhy/Battleship" className={styles.code}>
            <button>Code</button></a>
            <a target="_blank" rel="noreferrer" href="https://sajadmhy.github.io/Battleship/" className={styles.preview}>            
            <button>Preview</button></a>
            </div>
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