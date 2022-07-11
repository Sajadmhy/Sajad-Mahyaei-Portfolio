import styles from '../styles/Theme.module.css';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default function Theme({ children }) {
  const [theme, setTheme] = useState('light');
  
  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else { setTheme('light') }
  };

  return (
    <ThemeContext.Provider value={[theme]}>

    <div className={styles.container} style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
    <div className={styles.content}>
      <picture>
        <img src={theme === 'light' ? "/light-mode-black.webp" : "/light-mode-color.webp"} alt='sun icon'/>
      </picture>
        &nbsp;&nbsp;&nbsp;
        <input type="checkbox" id="tooglenight" className={`${styles.cbx} ${styles.hidden}`}
        value={theme} onChange={changeTheme}/>
        <label htmlFor="tooglenight" className={styles.switch}></label>
        &nbsp;&nbsp;&nbsp;
        <picture>
        <img src={theme === 'light' ? "/night-mode-black.webp" : "/night-mode-color.webp"} alt='moon icon'/>
        </picture>
    </div>
      <main style={{backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white', transition: '0.2s'}}>{children}</main>
    </div>
    </ThemeContext.Provider>
  )
}