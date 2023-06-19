import Link from "next/link";
import classes from "./post-item.module.css";
import { Fragment } from "react";
import Image from "next/image";

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <Fragment>
          <div className={classes.image} style={{ position: "relative" }}>
            <Image
              src={`/images/posts/${slug}/${image}`}
              alt={title}
              sizes="100%"
              fill
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </Fragment>
      </Link>
    </li>
  );
}

export default PostItem;
