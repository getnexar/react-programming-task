import '@styles/globals.scss';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Nexar: Programming Task',
  description: 'Programming task for React.js interviews',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
