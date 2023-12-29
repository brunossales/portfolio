'use client';

import Icon from '@/components/atoms/Icon';
import { Line } from '@/components/atoms/Line';
import { Text } from '@/components/atoms/Text';
import { IconLink } from '@/components/molecules/IconLink';
import { motion } from 'framer-motion';
import React from 'react';

export default function Home() {
    return (
        <motion.div className="flex flex-col items-start p-10 gap-5 w-2/3">
            <motion.div
                initial={{ transform: 'translateX(+200vw)' }}
                animate={{ transform: 'translateX(0)' }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-5"
            >
                <div className="flex items-start justify-start gap-2">
                    <Text
                        size="2xl"
                        forceBold
                        variant="primary"
                        text="BRUNO SALES"
                    />
                    <Icon name="user-check" style={{ color: 'cyan' }} />
                </div>

                <Text
                    size="2xl"
                    variant="secondary"
                    forceBold
                    text="Desenvolvedor Front End e Mobile"
                />

                <Text
                    size="2xl"
                    variant="tertiary"
                    forceBold
                    text="Atualmente trabalho com Next.JS para o desenvolvimento do front
                    end, React Query para o cacheamento de dados das requests,
                    TailwindCSS para a estilização e JEST para testes unitários e de
                    integração. Cypress para testes E2E."
                />
            </motion.div>

            <Line />

            <Text
                size="2xl"
                variant="primary"
                forceBold
                text="Este projeto foi desenvolvido com"
            />

            <motion.div
                initial={{ transform: 'translateX(-150%)' }}
                animate={{ transform: 'translateX(0)' }}
                transition={{ duration: 0.5 }}
                className="flex flex-col lg:grid grid-flow-row grid-cols-3 "
            >
                <Text
                    size="xl"
                    variant="tertiary"
                    forceBold
                    text="> Next 14 + React 18"
                />
                <Text
                    size="xl"
                    variant="secondary"
                    forceBold
                    text="> Composite Pattern"
                />
                <Text
                    size="xl"
                    variant="secondary"
                    forceBold
                    text="> TailwindCSS + Zustand"
                />
                <Text
                    size="xl"
                    variant="secondary"
                    forceBold
                    text="> React Query"
                />
                <Text size="xl" variant="secondary" forceBold text="> Jest" />
                <Text
                    size="xl"
                    variant="secondary"
                    forceBold
                    text="> Husky + Lint Staged"
                />
            </motion.div>

            <Line />

            <motion.div
                initial={{ transform: 'translateX(+200vw)' }}
                animate={{ transform: 'translateX(0)' }}
                transition={{ duration: 0.5 }}
                className="flex items-start justify-center gap-5 mt-3"
            >
                {/* Using a composite pattern */}
                <IconLink.Container>
                    <IconLink.Icon icon="user" iconProps={{ color: 'cyan' }} />
                    <IconLink.Link
                        label="Social Links"
                        className="underline decoration-solid pt-[3px] hover:text-cyan-300"
                        href="https://brunossales.github.io/social-links/"
                    />
                </IconLink.Container>

                <IconLink.Container>
                    <IconLink.Icon
                        icon="linkedin"
                        iconProps={{ color: 'cyan' }}
                    />
                    <IconLink.Link
                        label="LinkedIn"
                        className="underline decoration-solid pt-[3px] hover:text-cyan-300"
                        href="https://www.linkedin.com/in/bruno-sales-3a5856202/"
                    />
                </IconLink.Container>

                <IconLink.Container>
                    <IconLink.Icon
                        icon="github"
                        iconProps={{ color: 'cyan' }}
                    />
                    <IconLink.Link
                        label="Github"
                        className="underline decoration-solid pt-[3px] hover:text-cyan-300"
                        href="https://github.com/brunossales"
                    />
                </IconLink.Container>
            </motion.div>
        </motion.div>
    );
}
