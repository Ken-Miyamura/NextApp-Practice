import { ApiContext, User } from '@/pages/types/data';
import { fetcher } from '@/utils';

export type SigninParams = {
  username: string;
  password: string;
};

/**
 * 認証API
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザー
 */
const signin = async (context: ApiContext, params: SigninParams): Promise<User> => {
  const res: User = await fetcher<User>(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    'POST',
    params,
  );
  return res;
};

export default signin;
