import Link from "next/link";
import styles from "../styles/Bio.module.css";
import Head from "next/head";
import ProfileImage from "../components/ProfileImage";

export default function Technologies() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sajad&apos;s Tech Stack</title>
      </Head>

      <main className={styles.main}>
        <Link href="/">
          <a>
            <span className={styles.backArrow}>&larr;</span>
          </a>
        </Link>
        <ProfileImage />
        <h1 className={styles.title}>
          Technologies <span className={styles.emoji}>🔧</span>
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Front End Techs</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>MaterialUI</li>
              <li>TailwindCSS</li>
              <li>Bootstrap</li>
              <li>Styled Components</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Back End Techs</h2>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>GraphQL</li>
              <li>RestAPI</li>
              <li>Nest.js</li>
              <li>PHP</li>
              <li>MongoDB</li>
              <li>Strapi.io</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Others</h2>
            <ul>
              <li>Git</li>
              <li>Jest</li>
              <li>Netlify</li>
              <li>Vercel</li>
              <li>Chrome Extensions</li>
            </ul>
          </div>
        </div>
      </main>
      <h2>
        <Link href="/">
          <a className={styles.backBtn}>&larr; Back to home</a>
        </Link>
      </h2>
    </div>
  );
}
