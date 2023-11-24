import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import { ThemeContext } from "../theme/Theme";

export default function Home() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Sajad Mahyaei</title>
        <meta property="og:url" content="https://sajadm.me/" />
        <meta
          name="description"
          content="A Digital Marketer turned Front End Software Engineer."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sajad Mahyaei" />
        <meta
          property="og:description"
          content="A Digital Marketer turned Front End Software Engineer."
        />
        <meta property="og:image" content="/favicon.webp" />
      </Head>

      <main className={styles.main}>
        <Image
          src={theme === "light" ? "/profile.webp" : "/batman-profile.webp"}
          width={200}
          height={200}
          alt="Sajad Mahyaei"
          priority={true}
        />

        <h1 className={styles.title}>
          Hi there{" "}
          <span className={styles.emoji}>
            {theme === "light" ? "👋" : "🦇"}
          </span>
        </h1>

        <p className={styles.description}>
          I&apos;m {theme === "light" ? "Sajad" : "Batman"}, a Full Stack Web
          Developer at{" "}
          <a target="_blank" rel="noreferrer" href="https://www.paiger.co">
            Paiger
          </a>
        </p>

        <div className={styles.icons}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/sajadmhy"
          >
            <Image
              src="/linkedin-icon.webp"
              width={40}
              height={40}
              alt="linkedin Icon"
              priority={true}
            />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/sajadmhy"
          >
            <Image
              src="/twitter-icon.webp"
              width={40}
              height={40}
              alt="twitter Icon"
              priority={true}
            />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sajadmhy"
          >
            <Image
              src="/github-icon.webp"
              width={40}
              height={40}
              alt="github Icon"
              priority={true}
            />
          </a>

          <a href="mailto:hi@sajadm.tech">
            <Image
              src="/email.webp"
              width={40}
              height={40}
              alt="Email Icon"
              priority={true}
            />
          </a>

          <a href="/Sajad-Mahyaei-Web-Dev.pdf" download>
            <Image
              src="/resume-icon.webp"
              width={35}
              height={35}
              alt="resume Icon"
              priority={true}
            />
          </a>
        </div>

        <div className={styles.grid}>
          <Link href="/bio">
            <a className={styles.card}>
              <h2>Biography &rarr;</h2>
              <p>
                Find in-depth information about Sajad Mahyaei{" "}
                {theme === "light" ? "" : `(heard he's cool)`}
              </p>
            </a>
          </Link>

          <Link href="/projects">
            <a className={styles.card}>
              <h2>Projects &rarr;</h2>
              <p>Learn about my ongoing projects and technologies!</p>
            </a>
          </Link>

          <Link href="/experience">
            <a className={styles.card}>
              <h2>Past Experience &rarr;</h2>
              <p>My Experience working on different projects</p>
            </a>
          </Link>

          <Link href="/technologies">
            <a className={styles.card}>
              <h2>Technologies &rarr;</h2>
              <p>Technologies and stack that I have experience working with</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="/">
          <a>Made with ❤️ by Sajad Mahyaei</a>
        </Link>
      </footer>
    </div>
  );
}
