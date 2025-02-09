import styles from "./styles.module.css";

const Skeleton = ({count=1, type="Banner"}) => {
  return (
    <>
      {count > 1 ? (
        <ul className={styles.list}>
          {[...Array(count)].map((_, index) => (
            <li 
              key={index} 
              className={type === "Banner" ? styles.banner : styles.item}>
              </li>
          ))}
        </ul>
      ) : (
        <li className={type === "Banner" ? styles.banner : styles.item}>
          ЗАГРУЗКА ЕБАТЬ...
        </li>
      )}
    </>
  );
};

export default Skeleton;