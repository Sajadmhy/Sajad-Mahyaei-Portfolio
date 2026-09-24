import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../theme/Theme";
import ProfileImage from "../components/ProfileImage";

const SITE_DESCRIPTION =
  "Sajad Mahyaei, full stack developer with a marketing background. I build fast websites and web apps that bring in customers.";

const SERVICES = [
  {
    title: "Chrome Extensions",
    text: "Custom browser extensions that automate repetitive tasks and plug straight into the tools your team already uses.",
  },
  {
    title: "HR & Recruiting Tools",
    text: "Recruiter workflows, AI-powered CV parsing and generation, and internal dashboards that save your hiring team hours every week.",
  },
  {
    title: "Websites That Convert",
    text: "Fast, SEO-friendly websites and web apps built by a former digital marketer, designed to turn visitors into customers.",
  },
];

export default function Home() {
  const [theme] = useContext(ThemeContext);
  const [showServices, setShowServices] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>{SITE_DESCRIPTION}</title>
        <meta property="og:url" content="https://sajad.dev/" />
        <meta name="description" content={SITE_DESCRIPTION} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sajad Mahyaei" />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content="/favicon.webp" />
      </Head>

      <main className={styles.main}>
        <ProfileImage />

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

          <a href="mailto:hello@sajad.dev">
            <Image
              src="/email.webp"
              width={40}
              height={40}
              alt="Email Icon"
              priority={true}
            />
          </a>

          <a href="/Sajad-Mahyaei-Software-Engineer.pdf" download>
            <Image
              src="/resume-icon.webp"
              width={35}
              height={35}
              alt="resume Icon"
              priority={true}
            />
          </a>
        </div>

        <section className={styles.workWithMe}>
          <button
            type="button"
            className={`${styles.card} ${styles.toggleCard}`}
            aria-expanded={showServices}
            aria-controls="work-with-me-services"
            onClick={() => setShowServices(!showServices)}
          >
            <span className={styles.toggleTitle}>
              Work with me {showServices ? <>&darr;</> : <>&rarr;</>}
            </span>
            <span className={styles.toggleText}>
              See how I can help your business grow
            </span>
          </button>

          {showServices && (
            <div id="work-with-me-services" className={styles.serviceGrid}>
              {SERVICES.map(({ title, text }) => (
                <div key={title} className={styles.serviceCard}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a className={styles.ctaButton} href="mailto:hello@sajad.dev">
                    Get in touch
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>

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
              <h2>Experiences &rarr;</h2>
              <p>My Experience working as a Software Engineer</p>
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
