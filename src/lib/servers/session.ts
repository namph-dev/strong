import { authOptions } from '@/util/authOptions';
import { getServerSession } from 'next-auth/next';

export const getSession = async () => {
  return await getServerSession(authOptions);
};
