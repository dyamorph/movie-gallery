import { useState } from 'react';
import styles from './AddMovie.module.scss';

export default function AddMovie() {
  const [film, setFilm] = useState('');
  const [score, setScore] = useState('');
  const handleFilmChange = (e) => {
    setFilm(e.target.value);
  };
  const handleScoreChange = (e) => {
    const regExp = /^[0-9\b]+$/;
    if (e.target.value === '' || regExp.test(e.target.value)) {
      setScore(e.target.value);
    }
  };
  const getRandomId = () => {
    return Math.floor(Math.random() * 100000 + 1);
  };

  function addFilm(e) {
    e.preventDefault();
    const filmObject = { film: '', score: '', id: 0 };
    filmObject.film = film;
    filmObject.score = score;
    filmObject.id = getRandomId();
    console.log(filmObject);
    //const json = JSON.stringify(filmObject);

  }
  return (
    <>
      <form className={styles.form} onSubmit={addFilm}>
        <div className={styles.film_field}>
          <div className="md:w-1/3">
            <label className={styles.label_text} htmlFor="film">
              Movie
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className={styles.film_input}
              id="film"
              type="text"
              placeholder="Rage"
              value={film}
              onChange={handleFilmChange}
            ></input>
          </div>
        </div>
        <div className={styles.score_field}>
          <div className="md:w-1/3">
            <label className={styles.label_text} htmlFor="film-score">
              Score
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className={styles.score_input}
              id="film-score"
              type="text"
              pattern="[0-9.]+"
              placeholder="8"
              value={score}
              onChange={handleScoreChange}
            ></input>
          </div>
        </div>
        <div className={styles.btn_container}>
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className={styles.film_button} type="submit">
              Add movie
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
