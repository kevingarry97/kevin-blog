import CardList from "../components/cardList/cardList";
import Category from "../components/category/category";
import Featured from "../components/featured/featured";
import Menu from "../components/menu/menu";

import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <Category />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}
