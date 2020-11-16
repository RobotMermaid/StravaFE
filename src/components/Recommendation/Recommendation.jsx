import React, { useState } from 'react';
import styles from './Recommendation.css';
import List from '../List/List';

const Recommendation = () => {
  const [athleteID, setAthleteID] = useState(null);
  
  return (
    <div className={styles.Rec}>
      <List/>
      <h1>Get a shoe recommendation</h1>
      <form>
      <input type="text" value={athleteID} onChange={({ target }) => setAthleteID(target.value)} placeholder="Your Athlete ID"/>
      <button onClick={() => saveRecommendation()}>Get your Recommended Shoe</button>
    </form>
    </div>
  );
};

export default Recommendation;