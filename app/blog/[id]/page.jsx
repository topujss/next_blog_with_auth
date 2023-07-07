import Image from 'next/image';
import { getSingleBlog } from '../blogApi';

export async function generateMetadata({ params }) {
  const singlePost = await getSingleBlog(params.id);

  return {
    title: singlePost.title,
    description: singlePost.desc,
  };
}

export default async function SingleBlog({ params }) {
  const data = await getSingleBlog(params.id);

  return (
    <div className={'containe'}>
      <div className={'flex'}>
        <div className={'flex-one flex flex-col justify-between'}>
          <h1 className={'text-4xl'}>{data?.title}</h1>
          <p className={'text-xl font-light'}>{data?.desc}</p>
          <div className={'flex items-center gap-2'}>
            <Image
              src={data?.img}
              alt=""
              width={40}
              height={40}
              className={'object-cover rounded-full border border-emerald-500'}
            />
            <span className={'username'}>{data?.username}</span>
          </div>
        </div>
        <div className={'flex-one h-[35rem] relative object-cover'}>
          <Image src={data?.img} alt="" fill={true} className={'object-cover'} />
        </div>
      </div>
      <div className={'mt-12 text-xl font-light text-justify text-gray-400'}>
        <p className={'text'}>{data?.content}</p>
      </div>
    </div>
  );
}
