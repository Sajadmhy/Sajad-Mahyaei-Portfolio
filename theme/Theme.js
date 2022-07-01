import styles from '../styles/Theme.module.css';

export default function Theme({ children }) {
  return (
    <div className={styles.container}>
    <div className={styles.content}>
        <img src="/light-mode-black.png" />
        &nbsp;&nbsp;&nbsp;
        <input type="checkbox" id="tooglenight" className={`${styles.cbx} ${styles.hidden}`}/>
        <label htmlFor="tooglenight" className={styles.switch}></label>
        &nbsp;&nbsp;&nbsp;
        <img src="/night-mode-black.png" />
    </div>
      <main>{children}</main>
    </div>
  )
}