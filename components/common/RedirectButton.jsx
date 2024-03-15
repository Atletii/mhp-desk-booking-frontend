import React from 'react';
import Link from 'next/link';

const RedirectButton = ({ text, path }) => {
  return (
    <Link href={path}>
      <p className="inline-block text-blue-700 text-white font-bold py-2 px-4 rounded">
        {text}
      </p>
    </Link>
  );
};

export default RedirectButton;
