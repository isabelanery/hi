import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/my_layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Ika';
export const siteTitle = 'Fight Log';

export default function MyLayout({ children, home }) {
    return (
    <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Kimetsu No Yaiba - Fight Log"
          />
        </Head>

        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/kimetsu.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt=""
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/kimetsu.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
    )
}