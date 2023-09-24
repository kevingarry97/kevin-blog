import React from "react";
import styles from "./detailPage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/menu";
import Comments from "@/components/comments/comments";

const DetailPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet con sect etur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}><small>01.01.2024</small></span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea et quis
                obcaecati assumenda. Excepturi tempore quos quam fuga libero nemo,
                sequi, temporibus quas nisi, unde animi itaque corrupti consectetur
                minima?
            </p>
            <h5>Lorem ipsum dolor sit amet</h5>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea et quis
                obcaecati assumenda. Excepturi tempore quos quam fuga libero nemo,
                sequi, temporibus quas nisi, unde animi itaque corrupti consectetur
                minima?
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea et quis
                obcaecati assumenda. Excepturi tempore quos quam fuga libero nemo,
                sequi, temporibus quas nisi, unde animi itaque corrupti consectetur
                minima?
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default DetailPage;
