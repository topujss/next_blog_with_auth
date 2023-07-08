'use client';

import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import './dashboard.scss';

export default function Dashboard() {
  const session = useSession();
  const router = useRouter();

  console.log(session);

  const fetcher = (...args) => {
    fetch(...args).then((res) => {
      res.json();
    });
  };

  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await axios.post('http://localhost:3000/api/posts', {
        title,
        desc,
        img,
        content,
        username: session.data?.user.name,
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      axios.delete(`http://localhost:3000/api/posts/${id}`);
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === 'authenticated') {
    return (
      <section className="flex gap-24">
        <div className="posts">
          {isLoading ? (
            <p className="text-center text-2xl text-emerald-500">Loading...</p>
          ) : (
            data?.map((post) => {
              return (
                <div className="post_parent flex items-center justify-between" key={post._id}>
                  <div className="imgContainer relative h-[100px] w-[200px]">
                    <Image className="object-cover" src={post.img} width="200" height="100" alt="" />
                  </div>
                  <h2 className="post_title">{post.title}</h2>
                  <span className="cursor-pointer text-red-500 text-bold" onClick={() => handleDelete(post._id)}>
                    X
                  </span>
                </div>
              );
            })
          )}
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold">Add new post</h1>
          <input type="text" placeholder="title" className="input" />
          <input type="text" placeholder="desc" className="input" />
          <input type="text" placeholder="image" className="input" />
          <textarea placeholder="content" className="textarea" cols="30" rows="10"></textarea>
          <button className="p-5 cursor-pointer border-none font-bold rounded-md">Add Post</button>
        </form>
      </section>
    );
  } else {
    router?.push('/dashboard/login');
  }
}
