export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export async function fetcherWithToken<JSON = any>(
  input: RequestInfo,
  token: string
): Promise<JSON> {
  const res = await fetch(input, {
    headers: { Authorization: 'Bearer ' + token },
  });
  return res.json();
}
