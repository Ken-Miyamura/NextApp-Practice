import { NextPage, GetServerSideProps, GetServerSidePropsContext, PreviewData } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

type SsrProps = {
  message: string;
};

const Ssr: NextPage<SsrProps> = (props: SsrProps) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>SSR</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <p>このページはSSRによってアクセス時にサーバーで描画されたページ</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

// getServerSidePropsはページのリクエスト毎に実行
export const getServerSideProps: GetServerSideProps<SsrProps> = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にこのページのSSRが実行されました`;
  console.log(message);

  return {
    props: {
      message,
    },
  };
};

export default Ssr;
