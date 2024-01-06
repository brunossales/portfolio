import React from 'react';
import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

export interface IconProps extends LucideProps {
    name: keyof typeof dynamicIconImports;
}

const Icon = ({ name, ...props }: IconProps) => {
    /**
     * Importação dinâmica de ícones
     * parra evitar que todos os ícones sejam importados no build
     */
    const LucideIcon = dynamic(dynamicIconImports[name]);

    return <LucideIcon {...props} />;
};

export default Icon;
