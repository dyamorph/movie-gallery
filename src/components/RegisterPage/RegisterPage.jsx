import React from 'react';
import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
  return (
    <>
      <form className={styles.register_form}>
        <h1 className={styles.register_heading}>Register Form</h1>
        <div className="mb-6">
          <label className={styles.name_label} htmlFor="name">
            Your name
          </label>
          <input
            className={styles.name_input}
            type="text"
            id="name"
            placeholder="John Silver"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label className={styles.email_label} htmlFor="email">
            Your email
          </label>
          <input
            className={styles.email_input}
            type="email"
            id="email"
            placeholder="name@example.com"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label className={styles.password_label} htmlFor="password">
            Your password
          </label>
          <input className={styles.password_input} type="password" id="password" required></input>
        </div>
        <button className={styles.submit_btn} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default RegisterPage;
