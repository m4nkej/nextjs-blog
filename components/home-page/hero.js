import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/image_home_page.png"
          alt="Image showing mat"
          width={400}
          height={400}
        />
      </div>
      <h1>Hi, I'm Mat</h1>
      <p>Currently learning NextJS</p>
    </section>
  );
}

export default Hero;
