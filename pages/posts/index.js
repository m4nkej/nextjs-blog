import { Fragment } from "react";
import AllPosts from "../../components/posts-page/all-posts";
import { getAllPosts } from "../../lib/post-util";
import Head from "next/head";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A List of example blog posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}
export default AllPostsPage;

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60,
  };
}
