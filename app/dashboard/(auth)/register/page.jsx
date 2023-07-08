'use client';
import React, { useState } from 'react';
import '@/app/globals.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Register() {
  const [error, setError] = useState(null);

  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', input);

      res.status === 201 && router.push(`http://localhost:3000/dashboard/login?success=Account has been created`);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  const userName = /^[a-zA-Z0-9_-]{3,16}$/;

  return (
    <div className={'flex flex-col gap-5 items-center justify-center register_style'}>
      <h1 className={'title'}>Create an Account</h1>
      <h2 className={'subtitle'}>Please sign up to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className={'gap-5 w-[300px]'}>
        <input
          type="text"
          placeholder="Username"
          name="name"
          onChange={handleChange}
          className={'input'}
          accept={userName}
        />
        <input type="email" placeholder="Email" name="email" onChange={handleChange} className={'input'} />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          className={'input'}
        />
        <button className={'button'}>Register</button>
        {error && <h5>Something went wrong!</h5>}
      </form>
      <h2 className={'subtitle'}>
        Already have an account?{' '}
        <Link href="/dashboard/login" className="font-bold text-green-600">
          Login
        </Link>
      </h2>
      <span className={'or'}>- OR -</span>
      <Link className={'link'} href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
}
