'use client';

import React from 'react';
import { Text } from '@/components/atoms/Text';
import { motion } from 'framer-motion';
import Icon from '@/components/atoms/Icon';
import { Line } from '@/components/atoms/Line';

export default function Career() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start p-10 gap-5 w-2/3"
        >
            <div className="flex items-center justify-center gap-3">
                <Icon name="briefcase" color="cyan" />

                <Text
                    size="2xl"
                    variant="primary"
                    forceBold
                    text="CARREIRA PROFISSIONAL"
                />
            </div>

            <motion.div
                initial={{ transform: 'translateX(-100%)' }}
                animate={{ transform: 'translateX(0)' }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8"
            >
                <Text
                    variant="secondary"
                    forceBold
                    size="xl"
                    text="DINHEIROW / Abril/2023 - Atualmente"
                />

                <Text
                    variant="tertiary"
                    forceBold
                    size="xl"
                    text="> Desenvolvedor WEB Front END, documentação, teste Unitários, de Integração e E2E. 
                    Tenho forte experiência no projeto e contribuo com refatorações, 
                    testes e na arquitetura do projeto (para evitar possíveis refatorações no futuro)."
                />

                <Line />

                <Text
                    variant="secondary"
                    forceBold
                    size="xl"
                    text="FLIMED / Dezembro/2022 - Abril/2023"
                />

                <Text
                    variant="tertiary"
                    forceBold
                    size="xl"
                    text="> Desenvolvedor WEB Front END e Mobile. 
                Atuei no desenvolvimento de novas funcionalidades, com React Native e React.JS, 
                principal contribuição na tomada de partida no projeto mobile da empresa."
                />

                <Line />

                <Text
                    variant="secondary"
                    forceBold
                    size="xl"
                    text="DELL LEAD / Agosto/2022 - Dezembro/2023"
                />

                <Text
                    variant="tertiary"
                    forceBold
                    size="xl"
                    text="> Desenvolvedor Mobile. 
                Atuei no desenvolvimento de novas funcionalidades, com React Native, 
                com o projeto do AppTalk, que envolvia a criação de um aplicativo de comunicação para PCDs surdos e mudos."
                />
            </motion.div>
        </motion.div>
    );
}
