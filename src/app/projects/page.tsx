'use client';

import Icon from '@/components/atoms/Icon';
import { Text } from '@/components/atoms/Text';
import { useFindProjectsDataHook } from '@/hooks/find-projects.hook';
import Link from 'next/link';
import { useMemo } from 'react';

export default function Projects() {
    const { data, isLoading } = useFindProjectsDataHook();

    const renderingProjects = useMemo(
        () => !data || isLoading,
        [data, isLoading]
    );

    return (
        <div className="flex flex-col items-start p-10 w-full gap-5">
            <div className="flex items-center justify-center gap-3">
                <Icon name='bug-off' color="cyan" />
                <Text forceBold size='2xl' className="text-cyan-300" text='MEUS PRINCIPAIS PROJETOS' />
            </div>

            {renderingProjects ? (
                <div className="animate-pulse w-full bg-gray-300 rounded-md p-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-7 bg-gray-400 mb-3 rounded w-full"
                        ></div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-flow-row grid-cols-2 text-center gap-5 w-full justify-between 2xl:grid-cols-3">
                    {data?.map((project, index) => (
                        <div
                            key={`${index}_${project.name}`}
                            className="flex flex-col items-center justify-center gap-3 py-5 bg-cyan-100 rounded-md transition-all ease-in-out delay-100 hover:scale-95"
                        >
                            <h1 className="text-lg font-bold text-custom-purple">
                                Projeto: {index}
                            </h1>
                            <h1 className="text-lg font-bold text-custom-purple">
                                Nome: {project.name}
                            </h1>
                            <h1 className="text-lg font-bold text-custom-purple">
                                Favoritos: {project.stargazers_count}
                            </h1>
                            <Link
                                href={project.html_url}
                                target="_blank"
                                className="text-lg font-bold text-custom-purple underline decoration-solid hover:text-cyan-600 transition-all ease-in-out delay-100"
                            >
                                Link para o Projeto
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
