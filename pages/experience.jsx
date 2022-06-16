import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Experience.module.css'

export default function Experience() {
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
          Experience <span className={styles.emoji}>💻</span>
        </h1>


        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Full Stack Engineer - 100 Devs &darr;</h2>
            <p><li>Collaborated with a team of developers to build modern, responsive web applications using best practices </li>
            <li>Developed semantically structured full-stack web applications consisting of RESTful APIs serving data to a JavaScript front-end</li>
              <li>Reviewed code and utilized unit testing, pair programming, and agile methodologies like SCRUM to guarantee quality code</li>
            </p>
          </div>

          <div className={styles.card}>
            <h2>Digital Marketing Specialist - Furlough &darr;</h2>
            <p><li>Lead an SEO marketing campaign for the discord community to grow its size by 300%</li>
              <li>Managed the blog content and youtube videos for optimum exposure</li>
            </p>
          </div>

          <div className={styles.card}>
            <h2>Digital Marketing Specialist - Denxa &darr;</h2>
            <p><li>Designed Instagram and Telegram growth strategy and content marketing plan</li>
            <li>Managed and nurtured Telegram community</li>
            </p>
          </div>

           <div className={styles.card}>
            <h2>Digital Marketing Intern - Sana Gostar Sabz &darr;</h2>
            <p><li>Lead an off-page SEO campaign that ranked the website on the top 3 results of Google</li>
            <li>Raised brand awareness with Twitter marketing
</li>
            </p>
          </div>

          <div className={styles.card}>
            <h2>Content Writer - Rekab &darr;</h2>
            <p><li>Wrote daily articles for the blog</li>
            <li>Generated copies for different ad campaigns</li>
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