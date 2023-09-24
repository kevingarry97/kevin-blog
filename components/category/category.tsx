import React from 'react'
import styles from './category.module.css';
import Link from 'next/link';
import Image from 'next/image';

type Categories = {
  key: string;
  label: string;
}

const categories: Categories[] = [
  {
    key: 'style',
    label: 'Style'
  },
  {
    key: 'fashion',
    label: 'Fashion'
  },
  {
    key: 'food',
    label: 'Food'
  },
  {
    key: 'travel',
    label: 'Travel'
  },
  {
    key: 'culture',
    label: 'Culture'
  },
  {
    key: 'coding',
    label: 'Coding'
  },
]


const Category = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map(({key, label}) => (
          <Link key={key} href={`/blog?category=${key}`} className={`${styles.category} ${styles[key]}`}>
            <Image
              src={`/${key}.png`}
              alt=''
              width={32}
              height={32}
              className={styles.image}
            />
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Category
