import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) throw new Error('Failed to fetch data');

  return res.json();
}

export default async function Blog() {
  const posts = await getData();

  return (
    <div className={'flex items-center gap-12 mb-12'}>
      {posts.map(({ id, title, body }) => {
        return (
          <Link href={`/blog/${id}/`} className={'containe'} key={id}>
            <div className={'imageContainer'}>
              <Image
                src={'https://raw.githubusercontent.com/safak/nextjs-tutorial/main/public/apps.jpg'}
                alt=""
                width={400}
                height={250}
                className={'object-cover'}
              />
            </div>
            <div className={'content'}>
              <h1 className={'title mb-2'}>{title}</h1>
              <p className={'desc'}>{body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
