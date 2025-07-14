import { getSession } from './servers/session';

export const getCurrentUser = async () => {
  const session = await getSession();
  return session?.user;
};
