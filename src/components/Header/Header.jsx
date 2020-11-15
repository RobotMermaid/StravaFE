import React from 'react';
import styles from './Header.css';

const Header = () => {

  return (
    <div className={styles.Header}>
      <h1>Strava</h1>
      <h2>Shoe Rating and Recommendations</h2>
    </div>
  );
};

export default Header;