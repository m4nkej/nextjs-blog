import classes from "./all-posts.module.css";
import PostGrid from "./posts-grid";

function AllPosts(props) {
  const dummyPostArr = [
    {
      title: "test post",
      slug: "getting-started-nextjs",
      excerpt: "log descriptoion safkjapignhpgna",
      image: "getting-started-nextjs.png",
      date: "2023-06-19",
    },
    {
      title: "test post",
      slug: "getting-started-nextjs2",
      excerpt: "log descriptoion safkjapignhpgna",
      image: "getting-started-nextjs.png",
      date: "2023-06-19",
    },
    {
      title: "test post",
      slug: "getting-started-nextjs3",
      excerpt: "log descriptoion safkjapignhpgna",
      image: "getting-started-nextjs.png",
      date: "2023-06-19",
    },
    {
      title: "test post",
      slug: "getting-started-nextjs4",
      excerpt: "log descriptoion safkjapignhpgna",
      image: "getting-started-nextjs.png",
      date: "2023-06-19",
    },
  ];
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={dummyPostArr} />
    </section>
  );
}

export default AllPosts;
