import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Web - Qian Huang',
  description: 'Data Engineer & Data Scientist Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}