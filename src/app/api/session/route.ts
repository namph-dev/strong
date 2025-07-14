import { authOptions } from '@/util/authOptions';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}
