import Image from 'next/image';
import Link from 'next/link';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts/', {
    cache: 'no-cache',
  });

  if (!res.ok) throw new Error('Failed to fetch data');

  return res.json();
}

export default async function Blog() {
  const posts = await getData();

  return (
    <div className={'flex items-center gap-12 mb-12'}>
      {posts.map(({ _id, title, desc, img }) => {
        return (
          <Link href={`/blog/${_id}`} className={'containe'}>
            <div className={'imageContainer'}>
              <Image src={img} alt="" width={400} height={250} className={'object-cover'} />
            </div>
            <div className={'content'}>
              <h1 className={'title mb-2'}>{title}</h1>
              <p className={'desc'}>{desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
