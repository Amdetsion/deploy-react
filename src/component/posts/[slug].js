import React from 'react';
import Image from 'next/image';
const URL = process.env.STRAPIBASEURL;

export async function getStaticPaths() {
  const fetchParams = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `
            {
              amdetsions{
                    slug
                }
            }
            `,
    }),
  };

  const res = await fetch(`${URL}/graphql`, fetchParams);
  const posts = await res.json();
  const paths = posts.data.amdetsions.map((post) => {
    return { params: { slug: post.slug } };
  });

  return {
    paths: [...paths],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const fetchParams = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `
            {
              amdetsions(where: {slug: "${params.slug}"}){
                  cartitleone
                  cartitletwo
                  cartitlethree
                  cardescone
                  cardesctwo
                  cardescthree
                  accordionone
                  accordiontwo
                  accordionthree
                  newsimgdesc
                  newsimgdestwo
                  newsimgdesthree
                  slug
                  carousalone{
                    url
                  }
                  carousaltwo{
                    url
                  }
                  carousalthree{
                    url
                  }
                  newsimgone{
                    url
                  }
                  newsimgtwo{
                    url
                  }
                  newsimgthree{
                    url
                  }
                  parone{
                    url
                  }
                  parttwo{
                    url
                  }
                  partthree{
                    url
                  }
                  partfour{
                    url
                  }
                }
              }
            `,
    }),
  };

  const res = await fetch(`${URL}/graphql`, fetchParams);
  const { data } = await res.json();

  return {
    props: data.amdetsions[0],
    revalidate: 10,
  };
}
export default function Content({ newsimgthree, cartitletwo }) {
  return (
    <div>
      <h1>{cartitletwo}</h1>
      <Image
        src={newsimgthree[0].url}
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}
