import Link from 'next/link'
import React from 'react'

import styles from './menuCategories.module.css';

const categories = [
  {
    key: 'travel',
    label: 'Travel'
  },
  {
    key: 'food',
    label: 'Food'
  },
  {
    key: 'fashion',
    label: 'Fashion'
  },
  {
    key: 'style',
    label: 'Style'
  },
  {
    key: 'culture',
    label: 'Culture'
  },
  {
    key: 'coding',
    label: 'Coding'
  }
]

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      {categories.map(({key, label}) => (
        <Link href={`/blog?category=${key}`} className={`${styles.categoryItem} ${styles[key]}`}>
          {label}
        </Link>
      ))}
    </div>
  )
}

export default MenuCategories
