import AllPosts from "../../components/posts-page/all-posts";
import { getAllPosts } from "../../lib/post-util";

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
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
