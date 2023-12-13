import React from 'react';
import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import Link from 'next/link';

interface IconLinkProps {
    href: string;
    icon: keyof typeof dynamicIconImports;
    iconProps?: LucideProps;
    className?: string;
    label: string;
}

export const IconLink = ({ href, icon, iconProps, className, label }: IconLinkProps) => {
    /**
     * Importação dinâmica de ícones
     * parra evitar que todos os ícones sejam importados no build
     */
    const LucideIcon = dynamic(dynamicIconImports[icon])

    return (
        <div className="flex gap-2 text-white">
            <LucideIcon {...iconProps} />
            <Link
                className={className}
                href={href}
                target="_blank"
            >
                {label}
            </Link>
        </div>
    );
};
