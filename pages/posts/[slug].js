import Head from "next/head";
import { getPost, getSlugs } from "../../lib/post";

export const getStaticPaths = async () => {
  console.log("getStaticPath render");
  const slugs = await getSlugs();

  return {
    paths: slugs.map((item) => ({ params: { slug: item } })),
    fallback: false
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  console.log("getStaticProps render");
  const post = await getPost(slug);

  return {
    props: { post }
  };
};

const PostPage = ({ post }) => {
  console.log("FirstPostPage render ", post);

  return (
    <>
      <Head>
        <title>{`${post.title}- blog`}</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }}></article>
      </main>
    </>
  );
};

export default PostPage;
