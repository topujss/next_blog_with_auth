import './globals.scss';
import { Poppins } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from '@/Context/ThemeContext';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next blog app',
  description: 'Blog app with dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <AuthProvider>
            <main className={`max-w-7xl mx-auto`}>
              <Header />
              {children}
              <Footer />
            </main>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
