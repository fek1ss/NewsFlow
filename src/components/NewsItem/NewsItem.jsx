import styles from './styles.module.css';
import { formatPublishedDate } from '../../helpers/formatPublishedDate';

const NewsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      >
        {/* banner-img */}
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatPublishedDate(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
