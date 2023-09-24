import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Kevin dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Get Ideas that turn you more creative and productive.
          </h1>
          <p className={styles.postDesc}>
            Waste no more time because the best application for your blog is
            here. Let's not only talk about my experience we'd so much love to
            hear your version as well on this platform. You are more than
            welcome to create an account and change the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
