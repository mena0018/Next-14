import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
