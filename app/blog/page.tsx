import React from 'react'
import styles from './blog.module.css';
import CardList from '@/components/cardList/cardList';
import Menu from '@/components/menu/menu';

const Blog = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default Blog
