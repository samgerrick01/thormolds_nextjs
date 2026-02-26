// app/components/ClientProviders.tsx
'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ThemeToggle from './ThemeToggle';

const queryClient = new QueryClient();

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Theme toggle can now safely access window/document */}
      <ThemeToggle />
      {children}
    </QueryClientProvider>
  );
}
