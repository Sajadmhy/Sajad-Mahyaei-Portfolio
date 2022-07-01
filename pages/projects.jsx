import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Bio.module.css'
import { useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../theme/Theme'

export default function Projects() {
  const [theme] = useContext(ThemeContext);
  const [showButtons, setShowButtons] = useState([false,false,false,false,false,false]);

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
          Projects <span className={styles.emoji}>🚀</span>
        </h1>


        <div className={styles.grid}>

          <div className={styles.card} onMouseEnter={() => handleShow(0)} onMouseLeave={() => handleHide(0)}>
            <h2>Chat App</h2>
            <p>A Chatting app created with Next.js and Context</p>
            <Image 
              src="/chat.webp"
              width={300}
              height={170}
              alt="chat app project"
              />
            <div className={styles.btns} style={{display: showButtons[0] ? 'flex' : 'none'}} >
              <a target="_blank" rel="noreferrer" href="https://github.com/Sajadmhy/Chat-App" className={styles.code}>
            <button>Code</button></a>
            <a target="_blank" rel="noreferrer" href="https://magical-cranachan-86bddd.netlify.app/" className={styles.preview}>            
            <button>Preview</button></a>
            </div>
          </div>
          
          <div className={styles.card} onMouseEnter={() => handleShow(1)} onMouseLeave={() => handleHide(1)}>
            <h2>Gmail Clone App</h2>
            <p>A Gmail clone created with Next.js and Pure CSS and emojis</p>
            <Image 
              src="/gmail.webp"
              width={300}
              height={170}
              alt="gmail clone project"
              />
            <div className={styles.btns} style={{display: showButtons[1] ? 'flex' : 'none'}} >
              <a target="_blank" rel="noreferrer" href="https://github.com/Sajadmhy/gmail-clone" className={styles.code}>
            <button>Code</button></a>
            <a target="_blank" rel="noreferrer" href="https://main--deluxe-churros-437829.netlify.app/" className={styles.preview}>            
            <button>Preview</button></a>
            </div>
            
          </div>

          <div className={styles.card} onMouseEnter={() => handleShow(2)} onMouseLeave={() => handleHide(2)}>
            <h2>CRUD Exchange Orders App</h2>
            <p>A CRUD Application created with Next.js, MaterialUI, Nest.js and MongoDB</p>
            <Image
              src="/Crud-exchange.webp"
              width={300}
              height={110}
              alt="crud exchange app"
              />
            <div className={styles.btns} style={{display: showButtons[2] ? 'flex' : 'none'}} >
            <a target="_blank" rel="noreferrer" href="https://github.com/Sajadmhy/WW-client" className={styles.code}>
            <button>Code</button></a>
            <a target="_blank" rel="noreferrer" href="https://stately-zabaione-b81df0.netlify.app/" className={styles.preview}>            
            <button>Preview</button></a>
            </div>
          </div>

          <div className={styles.card} onMouseEnter={() => handleShow(3)} onMouseLeave={() => handleHide(3)}>
            <h2>Location Sharing Modal</h2>
            <p>An app to save a user&apos;s location with React.js, ContextAPI and Leaflet.js</p>
            <Image 
              src="/location-modal.webp"
              width={300}
              height={170}
              alt="location sharing modal"
              />
            <div className={styles.btns} style={{display: showButtons[3] ? 'flex' : 'none'}} >
            <a target="_blank" rel="noreferrer" href="https://github.com/Sajadmhy/location-sharing-modal" className={styles.code}>
            <button>Code</button></a>
            <a target="_blank" rel="noreferrer" href="https://sajadmhy.github.io/location-sharing-modal" className={styles.preview}>            
            <button>Preview</button></a>
            </div>
          </div>

          <div className={styles.card} onMouseEnter={() => handleShow(4)} onMouseLeave={() => handleHide(4)}>
            <h2>BattleShip Game</h2>
            <p>A game of battleship game created with HTML, CSS and JavaScript</p>
            <Image 
              src="/battleship.webp"
              width={300}
              height={150}
              alt="Battleship"
              />
            <div className={styles.btns} style={{display: showButtons[4] ? 'flex' : 'none'}} >
            <a target="_blank" rel="noreferrer" href="https://github.com/Sajadmhy/Battleship" className={styles.code}>
            <button>Code</button></a>
            <a target="_blank" rel="noreferrer" href="https://sajadmhy.github.io/Battleship/" className={styles.preview}>            
            <button>Preview</button></a>
            </div>
          </div>

          <div className={styles.card} onMouseEnter={() => handleShow(5)} onMouseLeave={() => handleHide(5)}>
            <h2>Memory Card Game</h2>
            <p>A memory card game created with React and Pure CSS</p>
            <Image 
              src="/memory-card.webp"
              width={300}
              height={150}
              alt="memory card game"
              />
            <div className={styles.btns} style={{display: showButtons[5] ? 'flex' : 'none'}} >
            <a target="_blank" rel="noreferrer" href="https://github.com/Sajadmhy/memory-card-game" className={styles.code}>
            <button>Code</button></a>
            <a target="_blank" rel="noreferrer" href="https://sajadmhy.github.io/memory-card-game/" className={styles.preview}>            
            <button>Preview</button></a>
            </div>
          </div>

          
        </div>
      </main>
      <h2 className={styles.backBtn}>
        <Link href="/">
          <a className={styles.backBtn}>&larr; Back to home</a>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href='/experience'>
          <a className={styles.backBtn}> Continue to Experience &rarr;</a>
        </Link>
      </h2>
    </div>
  )
}