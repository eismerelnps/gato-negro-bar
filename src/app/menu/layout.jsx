import Link from "next/link";
import Image from 'next/image'


const fetchSinglePosts = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function page({children, params }) {
  const { id } = params;
  const post = await fetchSinglePosts(id);

  return (
    <div className="mt-16">
    <div>
    <Image
    src={'/cover.jpg'}
    alt='gato-negro-image'
    width={500}
    height={500}
    />
  </div> 
    {/* <article className="text-center">
      <h1>{post.title}</h1>
      <p>{post.title}</p>
      <Link
      href={`/posts/${id}/comments`}
      >
      Ver Comentarios
      </Link>
     
    </article> */}
     {children}
    </div>
  );
}
