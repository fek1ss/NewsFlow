import React from 'react';
import styles from './styles.module.css';

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={keywords}
        className={styles.input}
        onChange={(e) => setKeywords(e.target.value)}
      />
    </div>
  );
};

export default Search;
