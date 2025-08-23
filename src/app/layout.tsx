import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tomcom - Portfolio',
  description: 'Deep Learning Engineer & Data Scientist Portfolio',
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