import { Text } from '@/components/atoms/Text';
import { Linkedin, Github, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Home() {
    return (
        <div className="flex flex-col items-start p-10 gap-5 w-2/3">
            <Text size='4xl' forceBold variant='primary' text='BRUNO SALES' />

            <Text size='2xl' variant='secondary' forceBold text='Desenvolvedor Front End e Mobile' />

            <Text
                size='2xl'
                variant='tertiary'
                forceBold
                text='Atualmente trabalho com Next.JS para o desenvolvimento do front
                end, React Query para o cacheamento de dados das requests,
                TailwindCSS para a estilização e JEST para testes unitários e de
                integração'
            />


            <div className="flex flex-col items-start justify-center gap-5 mt-3">
                <div className="flex gap-2 text-white">
                    <User color="cyan" />
                    <Link
                        className="underline decoration-solid pt-[3px] hover:text-cyan-300"
                        href={'https://brunossales.github.io/social-links/'}
                        target="_blank"
                    >
                        Social Links
                    </Link>
                </div>
                <div className="flex gap-2 text-white">
                    <Linkedin color="cyan" />
                    <Link
                        className="underline decoration-solid pt-[3px] hover:text-cyan-300"
                        href={
                            'https://www.linkedin.com/in/bruno-sales-3a5856202/'
                        }
                        target="_blank"
                    >
                        LinkedIn
                    </Link>
                </div>
                <div className="flex gap-2 text-white">
                    <Github color="cyan" />
                    <Link
                        className="underline decoration-solid pt-[3px] hover:text-cyan-300"
                        href={'https://github.com/brunossales'}
                        target="_blank"
                    >
                        GitHub
                    </Link>
                </div>
            </div>
        </div>
    );
}
