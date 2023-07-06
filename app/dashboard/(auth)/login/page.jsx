'use client';
import './login.scss';
import { signIn, useSession } from 'next-auth/react';
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
        <form onSubmit={handleSubmit} className={'gap-5 '}>
          <input type="email" placeholder="Email" className={'input'} />
          <input type="password" placeholder="Password" className={'input'} />
          <button className={'button'}>Login</button>
        </form>
        <button
          className="mt-4 ml-[20%] text-center text-green-600 text-xl font-semibold"
          onClick={() => signIn('google')}
        >
          login with google
        </button>
      </div>
    </>
  );
}
