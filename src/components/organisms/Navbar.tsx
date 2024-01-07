'use client';

import Image from 'next/image';
import localImage from '../../../public/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { useMenuStore } from '@/stores/menuStore';
import { Menu } from 'lucide-react';

const className =
    'w-full h-1/6 border-0 border-solid border-b-2 border-b-white flex justify-between items-center bg-custom-light-purple px-16';
const classNameText =
    'text-lg text-purple-50 hover:bg-purple-950 hover:p-2 hover:rounded-xl transition-all ease-in-out delay-100';

const classNamePhoneText =
    'text-lg text-purple-50 hover:scale-90  transition-all ease-in-out delay-100';

export const Navbar = () => {
    const path = usePathname();
    const { menuIsOpen, updateMenuIsOpen } = useMenuStore();

    const toggleMobileMenu = useCallback(() => {
        updateMenuIsOpen(!menuIsOpen);
    }, [menuIsOpen, updateMenuIsOpen]);

    return (
        <div className={className} data-testid="navbar">
            <div className="bg-slate-100 h-fit rounded-md w-fit p-[3px] cursor-pointer transition-all ease-in-out delay-100 hover:scale-110">
                <Image src={localImage} alt="" width={40} height={40} />
            </div>

            {/* Botão de Navegação para Dispositivos Móveis */}
            <button
                data-testid="mobile-menu-button"
                className="lg:hidden text-xl text-purple-50 z-20 cursor-pointer"
                onClick={(event) => {
                    event.stopPropagation();
                    toggleMobileMenu();
                }}
            >
                <Menu name="menu" className="z-30" />
            </button>

            {/* Navbar para Dispositivos Móveis */}
            {menuIsOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    className="lg:hidden absolute top-[16.6%] right-0 h-full w-1/2 rounded-md bg-custom-light-purple p-4 flex flex-col items-center space-y-4 bg-opacity-95 z-10"
                    onClick={(event) => event.stopPropagation()}
                    data-testid="mobile-menu"
                >
                    <Link
                        href="/"
                        className={clsx(classNamePhoneText, {
                            'bg-purple-950 rounded-xl px-4 py-2': path === '/',
                        })}
                        data-testid="home-mobile"
                    >
                        Início
                    </Link>
                    <Link
                        href="/career"
                        className={clsx(classNamePhoneText, {
                            'bg-purple-950 rounded-xl px-4 py-2':
                                path === '/career',
                        })}
                    >
                        Carreira
                    </Link>
                    <Link
                        href="/about"
                        className={clsx(classNamePhoneText, {
                            'bg-purple-950 rounded-xl px-4 py-2':
                                path === '/about',
                        })}
                    >
                        Sobre
                    </Link>
                    <Link
                        href="/projects"
                        className={clsx(classNamePhoneText, {
                            'bg-purple-950 rounded-xl px-4 py-2':
                                path === '/projects',
                        })}
                    >
                        Projetos
                    </Link>
                    <Link
                        href="/contact"
                        className={clsx(classNamePhoneText, {
                            'bg-purple-950 rounded-xl px-4 py-2':
                                path === '/contact',
                        })}
                    >
                        Contato
                    </Link>
                </motion.div>
            )}

            {/* Navbar para Telas Maiores */}
            <div className="hidden lg:flex items-center space-x-8">
                <Link
                    href="/"
                    className={clsx(classNameText, {
                        'bg-purple-950 rounded-xl p-2': path === '/',
                    })}
                >
                    Início
                </Link>
                <Link
                    data-testid="career"
                    href="/career"
                    className={clsx(classNameText, {
                        'bg-purple-950 rounded-xl p-2': path === '/career',
                    })}
                >
                    Carreira
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
