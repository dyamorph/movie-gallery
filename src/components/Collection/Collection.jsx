import React from 'react';
import { useState } from 'react';

import MovieCard from '../MovieCard/MovieCard.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Collection.module.scss';

export default function Collection() {
  const data = [{film: 'Star Wars', score: 10}]
  const [searchData, setSearchData] = useState('');

  const filteredData = data.filter((film) => {
    return film.film.toLowerCase().includes(searchData.toLowerCase());
  });


  return (
    <>
      <main className={styles.section}>
        <SearchBar getSearchValue={(input) => setSearchData(input)} />
        <section className={styles.card_wrapper}>
          <div className={styles.layout}>
            {filteredData.map((film) => (
              <MovieCard
                key={film.id}
                film={film.film}
                score={film.score}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
