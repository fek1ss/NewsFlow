import styles from "./styles.module.css";
import { formatTimeAgo } from './../helpers/formatTimeAgo';

const NewsBanner = () => {
  

  return (
    <div className={styles.banner}>
      <p className={styles.title}>{item.title}</p>
      <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
    </div>
  )
}

export default NewsBanner;