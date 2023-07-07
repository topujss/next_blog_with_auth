'use client';

import Link from 'next/link';
import DarkMode from '../darkMode/DarkMode';
import { signIn, signOut, useSession } from 'next-auth/react';

const linkArray = [
  {
    id: 1,
    title: 'home',
    url: '/',
  },
  {
    id: 2,
    title: 'about',
    url: '/about',
  },
  {
    id: 3,
    title: 'blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'contact',
    url: '/contact',
  },
  {
    id: 5,
    title: 'dashboard',
    url: '/dashboard',
  },
  {
    id: 6,
    title: 'portfolio',
    url: '/portfolio',
  },
];

export default function Header() {
  const session = useSession();

  return (
    <nav className="h-[100px] flex justify-between items-center">
      <Link href={`/`} className="font-semibold text-2xl">
        blogger
      </Link>
      <ul className="flex items-center gap-5">
        <DarkMode />
        {linkArray.map(({ id, title, url }) => {
          return (
            <li key={id}>
              <Link href={url} className="capitalize">
                {title}
              </Link>
            </li>
          );
        })}
        {session.status === 'authenticated' ? (
          <button
            className="bg-btn-primary hover:bg-green-700 text-white px-2 py-1 rounded border-none"
            onClick={signOut}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-btn-primary hover:bg-green-700 text-white px-2 py-1 rounded border-none"
            onClick={() => signIn('google')}
          >
            LogIn
          </button>
        )}
      </ul>
    </nav>
  );
}
