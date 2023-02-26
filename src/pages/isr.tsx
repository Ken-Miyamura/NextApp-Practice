import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { NextRouter, useRouter } from 'next/router';

type IsrProps = {
  message: string;
};

const Isr: NextPage<IsrProps> = (props) => {
  const { message } = props;
  const router: NextRouter = useRouter();

  if (router.isFallback) {
    // フォールバックページ向けの表示
    return <div>Loading･･･</div>;
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <p>このページはISRによってビルド時に生成</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<IsrProps> = async () => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にgetStaticPropsが実行されました`;

  return {
    props: {
      message,
    },
    // ページの有効期間を秒数で指定
    revalidate: 30,
  };
};

export default Isr;
