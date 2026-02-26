// app/layout.tsx
import '../styles/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import ClientProviders from '@/app/components/ClientProviders';

export const metadata = {
  title: 'Thor Molds',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <Header />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
