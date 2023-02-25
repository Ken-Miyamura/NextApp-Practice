import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

// propsの型定義
type SsgProps = {
  message: string;
};

// SSG向けのページの実装
// NextPage<props>でpropsが入るPageであることを明示
const Ssg: NextPage<SsgProps> = (props: SsgProps) => {
  const { message } = props;
  return (
    <div>
      {/* Headコンポーネントでで包むと、その要素はheadタグに配置される */}
      <Head>
        <title>SSG</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <p>このページは静的生成</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

// getStaticPropsはビルド時に実行される
export const getStaticProps: GetStaticProps<SsgProps> = async (context) => {
  const timestamp = new Date();
  const message = `${timestamp}にgetStaticPropsが実行されました`;
  console.log(message);
  console.log(context);
  return {
    props: {
      message,
    },
  };
};

export default Ssg;
