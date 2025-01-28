import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Solana Kit',
    description: 'The TypeScript Library for building Solana Apps',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
}
