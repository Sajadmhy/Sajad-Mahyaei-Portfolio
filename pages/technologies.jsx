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
            <h2>Frontend</h2>
            <ul>
              <li>SolidJS</li>
              <li>Next.js</li>
              <li>React.js</li>
              <li>TipTap</li>
              <li>Vite</li>
              <li>Tailwind CSS</li>
              <li>TanStack Query</li>
              <li>GraphQL (Apollo / codegen)</li>
              <li>Chrome Extensions</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Backend</h2>
            <ul>
              <li>Node.js</li>
              <li>Fastify</li>
              <li>type-graphql</li>
              <li>PostgreSQL</li>
              <li>Zapatos</li>
              <li>BullMQ</li>
              <li>Elasticsearch</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>AI / Product</h2>
            <ul>
              <li>OpenAI</li>
              <li>Groq</li>
              <li>Prompt engineering</li>
              <li>Structured JSON outputs</li>
              <li>CV generation &amp; comparison</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Tooling &amp; Quality</h2>
            <ul>
              <li>Vitest</li>
              <li>Playwright</li>
              <li>GraphQL Codegen</li>
              <li>Docker</li>
              <li>Git</li>
              <li>PostHog / product analytics</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Practices</h2>
            <ul>
              <li>REST / GraphQL API design</li>
              <li>Background jobs</li>
              <li>Responsive UI</li>
              <li>Web Scraping</li>
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
