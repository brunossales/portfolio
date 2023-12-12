'use client';

import Image from 'next/image';
import localImage from '../../public/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const className =
    'w-full h-1/6 border-0 border-solid border-b-2 border-b-white flex justify-between items-center bg-custom-light-purple px-16';
const classNameText =
    'text-lg text-purple-50 hover:bg-purple-950 hover:p-2 hover:rounded-xl transition-all ease-in-out delay-100';

export const Navbar = () => {
    const path = usePathname();

    return (
        <div className={className}>
            <div className="bg-slate-100 h-fit rounded-md w-fit p-[3px] cursor-pointer transition-all ease-in-out delay-100 hover:scale-110">
                <Image src={localImage} alt="" width={40} height={40} />
            </div>

            <div className="flex items-center space-x-8">
                <Link
                    href="/"
                    className={clsx(classNameText, {
                        'bg-purple-950 rounded-xl p-2': path === '/',
                    })}
                >
                    Início
                </Link>
                <Link
                    href="/about"
                    className={clsx(classNameText, {
                        'bg-purple-950 rounded-xl p-2': path === '/about',
                    })}
                >
                    Sobre
                </Link>
                <Link
                    href="/projects"
                    className={clsx(classNameText, {
                        'bg-purple-950 rounded-xl p-2': path === '/projects',
                    })}
                >
                    Projetos
                </Link>
                <Link
                    href="/contact"
                    className={clsx(classNameText, {
                        'bg-purple-950 rounded-xl p-2': path === '/contact',
                    })}
                >
                    Contato
                </Link>
            </div>
        </div>
    );
};
