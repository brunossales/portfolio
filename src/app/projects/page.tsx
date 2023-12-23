'use client';

import { Text } from '@/components/atoms/Text';
import { useFindProjectsDataHook } from '@/hooks/find-projects.hook';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Fragment, useMemo } from 'react';
import { CardProject } from './pieces/card-project';
import Icon from '@/components/atoms/Icon';

export default function Projects() {
    const { data, isLoading } = useFindProjectsDataHook();

    const renderingProjects = useMemo(
        () => !data || isLoading,
        [data, isLoading]
    );

    const { scrollYProgress } = useScroll();

    const scale = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <Fragment>
            <motion.div className="flex flex-col items-start p-10 w-full gap-5">
                <div className="flex items-center justify-center gap-3">
                    <Icon name="bug-off" color="cyan" />
                    <Text
                        forceBold
                        size="2xl"
                        className="text-cyan-300"
                        text="MEUS PRINCIPAIS PROJETOS"
                    />
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
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-flow-row grid-cols-1 text-center gap-5 w-full justify-between md:grid-cols-2 2xl:grid-cols-3"
                    >
                        {data?.map((project, index) => (
                            <CardProject
                                key={`${index}_${project.name}`}
                                name={project.name}
                                stargazers_count={project.stargazers_count}
                                html_url={project.html_url}
                                index={index}
                            />
                        ))}
                    </motion.div>
                )}
            </motion.div>
            <motion.div
                className="h-2 w-full z-50 bottom-0 bg-violet-600 fixed progress-bar"
                hidden={renderingProjects}
                whileInView={{ scaleX: 0 }}
                style={{ scaleX: scale }}
            />
        </Fragment>
    );
}
