import Link from "next/link";
import MyLayout from "../components/my_layout";
import utilStyles from "../styles/utils.module.css";
import { getOnePieceData } from "../lib/get_one_piece_data";
import MyHoverEffect from "../components/my_hover_effect";

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
    <MyHoverEffect />
  );
}