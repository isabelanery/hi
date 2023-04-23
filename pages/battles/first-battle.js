import Head from 'next/head';
import Link from 'next/link';
import MyLayout from '../../components/my_layout';
import MyNextImg from '../../components/my_next_img';
import MyNextScript from '../../components/my_next_script';

export default function FirstBattle() {
  return (
    <>
    <MyLayout>
      <Head>
        <title>First Battle</title>
        <link rel="icon" href="/favicon.ico" />
        <MyNextScript />
      </Head>

        <h1>First Battle</h1>
    </MyLayout>
    </>
  );
}