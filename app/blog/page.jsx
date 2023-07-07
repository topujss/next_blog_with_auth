import Image from 'next/image';
import Link from 'next/link';
import { getAllBlog } from './blogApi';

export default async function Blog() {
  const posts = await getAllBlog();

  return (
    <div className={''}>
      {!posts.length ? (
        <div className="">
          <h1 className=" text-center font-extrabold text-red-600 text-2xl">No posts found</h1>
          <p className="text-center text-emerald-600 text-xl">Add new posts to see below.</p>
        </div>
      ) : (
        posts.map(({ _id, title, desc, img }, index) => {
          return (
            <Link href={`/blog/${_id}`} className={'flex items-center gap-12 mb-12'}>
              <div className={'relative'}>
                <Image src={img} alt="" width={400} height={250} className={'object-cover rounded'} />
                <span className={`absolute top-0 left-0 bg-slate-600 px-2 py-1`}>{index + 1}</span>
              </div>
              <div className={'content'}>
                <h1 className={'title mb-2'}>{title}</h1>
                <p className={'text-xl text-gray-500'}>{desc}</p>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
}
