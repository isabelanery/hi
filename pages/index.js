import { Head } from "next/head";
import MyLayout, { siteTitle } from "../components/my_layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <MyLayout home>
      <section className={utilStyles.headingMd}>
        <Link href="battles/first-battle">
          <p>Fight Log</p>
        </Link>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </MyLayout>
  );
}