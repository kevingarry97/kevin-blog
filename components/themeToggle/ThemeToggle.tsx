'use client';

import React, { useContext } from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/themeContext'

const ThemeToggle = () => {
  const {theme, toggle} = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${theme == `dark` ? styles.bgWhite : styles.bgDark}`} onClick={toggle}>
      <Image src={'/moon.png'} alt='moon' width={18} height={18} />
      <div className={`${styles.ball} ${theme == 'dark' ? styles.themeDark : styles.themeLight}`}></div>
      <Image src={'/sun.png'} alt='sun' width={18} height={18} />
    </div>
  )
}

export default ThemeToggle
