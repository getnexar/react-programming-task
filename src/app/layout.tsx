import type {Metadata} from 'next';
import Providers from '@providers';
import '@styles/globals.scss';

export const metadata: Metadata = {
  title: 'Nexar: Programming Task',
  description: 'Programming task for React.js interviews',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
