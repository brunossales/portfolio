import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'next-gif': 'url("/gifreactt.gif")',
            },
            backgroundColor: {
                'custom-purple': '#1A0B2E',
                'custom-light-purple': '#251C31',
            },
            textColor: {
                'custom-purple': '#1A0B2E',
                'text-title': '#41FDFF',
            },
        },
    },
    plugins: [],
};
export default config;
