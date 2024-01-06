import clsx from 'clsx';
import React, { useMemo } from 'react';

export type TextProps = {
    text: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    variant?: 'primary' | 'secondary' | 'tertiary' | 'error';
    forceBold?: boolean;
};

export const Text: React.FC<TextProps> = ({
    text,
    className,
    size,
    variant,
    forceBold = false,
}) => {
    const classNames = useMemo(
        () =>
            clsx(className, {
                'text-cyan-200': variant === 'primary',
                'text-purple-200': variant === 'secondary',
                'text-purple-100': variant === 'tertiary',
                'text-red-200': variant === 'error',
                'text-sm': size === 'sm',
                'text-md': size === 'md',
                'text-lg': size === 'lg',
                'text-xl': size === 'xl',
                'text-2xl': size === '2xl',
                'text-3xl': size === '3xl',
                'text-4xl': size === '4xl',
                'font-bold': forceBold,
            }),
        [className, size, variant, forceBold]
    );

    return (
        <p className={classNames} data-testid="text-atom">
            {text}
        </p>
    );
};
