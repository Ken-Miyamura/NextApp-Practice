import { ApiContext, User } from '@/pages/types/data';
import { fetcher } from '@/utils';

export type GetUserParams = {
  id: number;
};

/**
 * ユーザーAPI（個別取得s）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザー
 */
const getUser = async (context: ApiContext, { id }: GetUserParams): Promise<User> => {
  const res: User = await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`, 'GET');

  return res;
};

export default getUser;
