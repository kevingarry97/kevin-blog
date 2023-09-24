import React from 'react'
import Link from 'next/link'

import styles from './menuPosts.module.css'
import Image from 'next/image';

interface Props {
    withImage: boolean
}

const popularCategory = [
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
    }
];

const MenuPosts = ({withImage}: Props) => {
  return (
    <div className={styles.items}>
        {popularCategory.map(({key, label}) => (
          <Link key={key} href={'/'} className={styles.item}>
            {withImage && <div className={styles.imageContainer}>
              <Image src={'/p1.jpeg'} alt='' fill className={styles.image} />
            </div>}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles[key]}`}>
                {label}
              </span>
              <h3 className={styles.postTitle}>Little by little there's always a perfect experience</h3>
              <div className={styles.detail}>
                <span className={styles.username}><b>John Doe</b></span>
                <span className={styles.date}> - 10.03.2023</span>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default MenuPosts
