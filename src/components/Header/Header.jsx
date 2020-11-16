import React from 'react';
import styles from './Header.css';
import Links from '../Links/Links';

const Header = () => {
  return (
    
    <div className={styles.Header}>
      <h1>STRAVA</h1>
      <h2>Shoe Rating and Recommendations</h2>
      <Links/>
    </div>
    
  );
};

export default Header;