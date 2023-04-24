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
        <Link href="/">
          <p>Home Page</p>
        </Link>
        </section>
        
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Hakis</h2>
        <ul className={utilStyles.list}>
          {allHakis.map(({ id, description, roman_name }) => (
            <li className={utilStyles.listItem} key={id}>
              <br />
              <br />
              {id} - <b>{roman_name}</b>
              <br />
              <br />
              {description}
            </li>
          ))}
        </ul>
      
      </section>
    </MyLayout>
  );
}