import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
function HomePage() {
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
    <Fragment>
      <Hero />
      <FeaturedPosts posts={dummyPostArr} />
    </Fragment>
  );
}
export default HomePage;
