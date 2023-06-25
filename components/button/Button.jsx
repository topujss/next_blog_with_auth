import Link from 'next/link';
import React from 'react';

export default function Button({ title, url }) {
  return (
    <Link href={url}>
      <button className="p-5 cursor-pointer bg-btn-primary border-none rounded text-white w-max">
        {title}
      </button>
    </Link>
  );
}
