import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog({ description, title, slug, blogbody, splash }) {
  return (
    <div>
      <Link href={'/POSTS/' + slug}>
        <a>
          <h2>{title}</h2>
          <p>{description}</p>
          <h1>{blogbody}</h1>
          <Image src={splash[0].url} width={500} height={500} alt="fuckyou" />
        </a>
      </Link>
    </div>
  );
}
