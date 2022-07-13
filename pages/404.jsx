import Image from "next/image"
import styles from '../styles/Custom404.module.css'
import Link from "next/link"
import Head from "next/head"

export default function Custom404() {
    return (
        <div className={styles.container}>
            <Head>
            <title>Sajad&apos;s Bad Dream</title>
            </Head>
            <h2>Page not found, sorry!</h2>
            <Image
                src="/404.webp"
                width={600}
                height={430}
                alt="404"
            />
            <h2 className={styles.backBtn}>
        <Link href="/">
          <a className={styles.backBtn}>&larr; Back to home</a>
        </Link>
        </h2>
        </div>
    )
}