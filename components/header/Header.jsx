'use client';

import Link from 'next/link';

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
  return (
    <nav className="h-[100px] flex justify-between items-center">
      <Link href={`/`} className="font-semibold text-2xl">
        blogger
      </Link>
      <ul className="flex items-center gap-5">
        {linkArray.map((link) => {
          return (
            <li key={link.id}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          );
        })}
        <button
          className="bg-btn-primary hover:bg-green-700 text-white px-2 py-1 rounded border-none"
          onClick={() => alert('logged out')}
        >
          Logout
        </button>
      </ul>
    </nav>
  );
}
