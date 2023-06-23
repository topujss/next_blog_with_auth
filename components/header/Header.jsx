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
    <nav>
      <ul>
        {linkArray.map((link) => {
          return (
            <li key={link.id}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
