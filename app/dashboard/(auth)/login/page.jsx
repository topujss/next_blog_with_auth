'use client';
import './login.scss';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'authenticated') {
    router?.push('/dashboard');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn('credentials', { email, password });
  };

  return (
    <>
      <div className="login_style w-[350px] mx-auto">
        <h1 className="text-center my-3">
          New User?{' '}
          <Link href={`/dashboard/register`} className="font-bold text-green-600">
            Register
          </Link>{' '}
        </h1>
        <form onSubmit={handleSubmit} className={''}>
          <input type="email" placeholder="Email" className={'input'} />
          <input type="password" placeholder="Password" className={'mt-5'} />
          <button className={'my-4'}>Login</button>
        </form>
        <button
          className="ml-[20%] text-center text-green-600 text-xl font-semibold"
          onClick={() => signIn('google')}
        >
          login with google
        </button>
      </div>
    </>
  );
}
