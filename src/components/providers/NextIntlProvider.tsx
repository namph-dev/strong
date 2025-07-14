import { notFound } from 'next/navigation';
import NextIntl from './NextIntl';
import { getLocale, getTimeZone } from 'next-intl/server';
import { ReactNode } from 'react';

export default async function NextIntlProvider({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  const timeZone = await getTimeZone();
  let messages;
  try {
    messages = (await import(`/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <NextIntl
      locale={locale}
      messages={messages}
      now={new Date()}
      timeZone={timeZone}>
      {children}
    </NextIntl>
  );
}
