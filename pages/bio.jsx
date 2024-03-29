import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Bio.module.css";
import { useContext } from "react";
import { ThemeContext } from "../theme/Theme";
import Head from "next/head";

export default function Bio() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Sajad&apos;s Biography</title>
      </Head>

      <main className={styles.main}>
        <Link href="/">
          <a>
            <span className={styles.backArrow}>&larr;</span>
          </a>
        </Link>
        <Image
          src={theme === "light" ? "/profile.webp" : "/batman-profile.webp"}
          width={200}
          height={200}
          alt="Sajad Mahyaei"
          priority={true}
        />
        <h1 className={styles.title}>
          Biography <span className={styles.emoji}>📝</span>
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Education</h2>
            <p>
              <li>Sampad High School </li>
              <li>Bu-ali Sina University (Eng.)</li>
              <li>K.N Toosi University (Eng.)</li>
            </p>
          </div>

          <div className={styles.card}>
            <h2>Coding Education</h2>
            <p>
              <li>LinkedIn Learning</li>
              <li>The Odin Project Boot Camp</li>
              <li>100 Devs</li>
            </p>
          </div>

          <div className={styles.card}>
            <h2>Hobbies</h2>
            <p>
              <li>Building Web Apps</li>
              <li>Learning New Stuff</li>
              <li>
                {theme === "light" ? "Design and Art" : "Riding Batmobile"}
              </li>
              <li>Networking</li>
            </p>
          </div>

          <div className={styles.card}>
            <h2>Fun Facts</h2>
            <li>
              Love {theme === "light" ? "helping people" : "catching criminals"}
            </li>
            <p>
              <li>Harry Potter {theme === "light" ? "" : "is my"} fan</li>
              <li>OCD/ADHD pal</li>
              <li>Love {theme === "light" ? "Batman" : "Myself"}</li>
            </p>
          </div>
        </div>
      </main>
      <h2 className={styles.backBtn}>
        <Link href="/">
          <a>&larr; Back to home</a>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/projects">
          <a> Continue to Projects &rarr;</a>
        </Link>
      </h2>
    </div>
  );
}
