import { useState } from 'react';
import styles from './Search.module.css';

export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const [searchTerm, setSearchTerm] = useState<string>();

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        alert(searchTerm);
      }}
    >
      <input
        type="text"
        className={styles.input}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className={styles.btn__container}>
        <button type="submit" className={styles.button}>
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
