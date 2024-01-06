import React from 'react';
import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import Link from 'next/link';

export interface IconContainerProps {
    className?: string;
    children: React.ReactNode;
}

const IconLinkContainer = ({ className, children }: IconContainerProps) => {
    return (
        <div className={`flex gap-2 text-white ${className}`}>{children}</div>
    );
};

export interface IconProps {
    icon: keyof typeof dynamicIconImports;
    iconProps?: LucideProps;
}

const Icon = ({ iconProps, icon }: IconProps) => {
    /**
     * Importação dinâmica de ícones
     * parra evitar que todos os ícones sejam importados no build
     */
    const LucideIcon = dynamic(dynamicIconImports[icon]);

    return <LucideIcon {...iconProps} />;
};

export interface LinkProps {
    className?: string;
    href: string;
    label: string;
}

const LinkComponent = ({ className, href, label }: LinkProps) => {
    return (
        <Link className={className} href={href} target="_blank">
            {label}
        </Link>
    );
};

// Composite Pattern
export const IconLink = {
    Container: IconLinkContainer,
    Icon,
    Link: LinkComponent,
};
