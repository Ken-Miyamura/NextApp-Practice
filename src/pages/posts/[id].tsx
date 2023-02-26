import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage, PreviewData } from 'next';
import Head from 'next/head';
import { NextRouter, useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

type PostProps = {
  id: string;
};

const Post: NextPage<PostProps> = (props: PostProps) => {
  const { id } = props;
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
        <p>このページは静的生成</p>
        <p>{`posts/${id}に対応するページ`}</p>
      </main>
    </div>
  );
};

// getStaticPathは生成したいページのpathの組み合わせを返す
export const getStaticPaths: GetStaticPaths = async () => {
  // それぞれのページのpathパラメータをまとめたもの
  const paths = [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
    {
      params: {
        id: '3',
      },
    },
  ];

  // fallbackをfalseにし、pathで定義されたページ以外は404ページに飛ぶようになる
  return { paths, fallback: false };
};

// パラメータの型を定義
interface PostParams extends ParsedUrlQuery {
  id: string;
}

// getStaticPath実行後にそれぞれのpathに対してgetStaticPropsを実行していく
export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (
  context: GetStaticPropsContext<PostParams, PreviewData>,
) => {
  return {
    props: {
      // paramsにgetStaticPathで指定したidがそれぞれ入る
      id: context.params!.id,
    },
  };
};

export default Post;
