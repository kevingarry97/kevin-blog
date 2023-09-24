import React from "react";
import Pagination from "../pagination/pagination";
import Card from "../card/card";

import styles from './cardList.module.css';

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {[1, 2, 3].map((item) => (
          <Card key={item} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
