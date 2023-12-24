'use client';

import React from 'react';
import { Text } from '@/components/atoms/Text';
import { motion } from 'framer-motion';
import Icon from '@/components/atoms/Icon';

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
        </motion.div>
    );
}
