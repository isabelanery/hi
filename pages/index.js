import Link from "next/link";
import MyLayout from "../components/my_layout";
import utilStyles from "../styles/utils.module.css";
import { getOnePieceData } from "../lib/get_one_piece_data";

export async function getStaticProps() {
  const allHakis = await getOnePieceData('hakis');
  return {
    props: {
      allHakis,
    },
  };
}

export default function Home ({ allHakis }) { 
  return (
    <MyLayout home>
      <section className={utilStyles.headingMd}>
        <Link href="battles/first-battle">
          <p>Fight Log</p>
        </Link>
        </section>
        
        <h2>
          <Link href="hakis">
            <p>Hakis</p>
          </Link>
        </h2>
    </MyLayout>
  );
}