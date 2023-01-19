import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const isAuth = false;

  return (
    <header className={styles.header}>
      <span className={styles.header_title}>My Movie Gallery</span>
      <ul className={styles.list}>
        <NavLink
          to="/addmovie"
          className={({ isActive }) => (isActive ? styles.active_link : styles.inactive_link)}
        >
          Add Movie
        </NavLink>
        <NavLink
          to="/collection"
          className={({ isActive }) => (isActive ? styles.active_link : styles.inactive_link)}
        >
          Collection
        </NavLink>
      </ul>
      <>
        {isAuth ? (
          <div className={styles.user}>
            <span className={styles.user_name}>dyamorph</span>
            <img className={styles.user_img} src="../assets/avatar.jpg" alt="avatar" />
            <button className={styles.logout_btn}>Log out</button>
          </div>
        ) : (
          <div className={styles.login_btns}>
            <Link to="/login" className={styles.login_btn}>
              Login
            </Link>
            <Link to="/register" className={styles.register_btn}>
              Register
            </Link>
          </div>
        )}
      </>
    </header>
  );
};

export default Header;
