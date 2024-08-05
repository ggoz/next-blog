import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/post";

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts
    }
  };
};

const HomePage = ({ posts }) => {
  console.log("HomePage render");
  console.log(posts);

  return (
    <>
      <Head>
        <title>my Blog</title>
      </Head>
      <main>
        <h1>my blog</h1>
        <ul>
          {posts.map((item) => (
            <li key={item.slug}>
              <Link href={`/posts/${item.slug}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default HomePage;
