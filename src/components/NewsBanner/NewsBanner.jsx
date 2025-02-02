import styles from "./styles.module.css";
import Image from '../Image/Image';
import { formatPublishedDate } from "../../helpers/formatPublishedDate";

/**
 * formatTimeAgo - показывает время последней публикации новости 
 * (5 мин назад, 1 день назад...)
 */

const NewsBanner = ({item}) => {

  return (
    <div className={styles.banner}>
      <Image image={item?.image}/> 
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatPublishedDate(item.published)} by {item.author}
      </p>
    </div>
  )
}

export default NewsBanner;