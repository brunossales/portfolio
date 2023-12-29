'use client';

import { useMenuStore } from '@/stores/menuStore';
import { useCallback } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

export const Providers = ({ children }: { children: React.ReactNode }) => {
    const { menuIsOpen, updateMenuIsOpen } = useMenuStore();
    const closeMenu = useCallback(() => {
        menuIsOpen && updateMenuIsOpen(false);
    }, [updateMenuIsOpen, menuIsOpen]);

    return (
        <QueryClientProvider client={queryClient}>
            <div className="h-full w-full" onClick={closeMenu}>
                {children}
            </div>
        </QueryClientProvider>
    );
};
