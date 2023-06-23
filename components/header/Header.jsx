'use client';

import Link from 'next/link';
import Styles from './header.module.css';

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
    <nav className={Styles.container}>
      <Link href={`/`} className={Styles.logo}>
        blogger
      </Link>
      <ul className={Styles.links}>
        {linkArray.map((link) => {
          return (
            <li key={link.id} className={Styles.link}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          );
        })}
        <button className={Styles.logout} onClick={() => console.log('logged out')}>
          Logout
        </button>
      </ul>
    </nav>
  );
}
