'use client';
import '@/app/globals.scss';
import { signIn } from 'next-auth/react';

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const pass = e.target[1].value;

    signIn('credentials', { email, pass });
  };

  return (
    <>
      <div className="login_style w-[300px]">
        <form onSubmit={handleSubmit} className={'gap-5 '}>
          <input type="email" placeholder="Email" className={'input'} />
          <input type="password" placeholder="Password" className={'input'} />
          <button className={'button'}>Login</button>
        </form>
        <button className="block" onClick={() => signIn('google')}>
          login with google
        </button>
      </div>
    </>
  );
}
