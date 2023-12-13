import type { Metadata } from 'next';
import './globals.css';
import { Nunito, PT_Sans, Poppins } from 'next/font/google';
import { Navbar } from '@/components/organisms/Navbar';
import { Providers } from './Providers';
import Favicon from '../../public/react.png';

const NunitoFont = Nunito({
    preload: true,
    subsets: ['latin'],
    variable: '--font-nunito',
});

const PTSansFont = PT_Sans({
    preload: true,
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-pt-sans',
});

const PoppinsFont = Poppins({
    preload: true,
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['400', '700'],
});

export const metadata: Metadata = {
    title: 'Porfólio Bruno',
    description: 'Esse é o portólio de Bruno',
    icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body
                className={`${NunitoFont.variable} ${PTSansFont.variable} ${PoppinsFont.variable} bg-custom-purple h-screen w-screen`}
            >
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
