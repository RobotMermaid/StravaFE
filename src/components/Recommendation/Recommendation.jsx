import React, { useState } from 'react';
import styles from './Recommendation.css';
import { getRecommendedShoe } from '../Services/API';
import RecShoe from '../RecShoe/RecShoe';

const Recommendation = () => {
  const [athleteID, setAthleteID] = useState(null);
  const [recShoe, setRecShoe] = useState({});

  const saveRecommendation = () => {
    // fetch
    getRecommendedShoe(athleteID)
    .then(res => setRecShoe(res))
  }
  
  return (
    <div className={styles.Rec}>
      <h1>Get a shoe recommendation</h1>
      <form>
      <input type="text" value={athleteID} onChange={({ target }) => setAthleteID(target.value)} placeholder="Your Athlete ID"/>
      <button onClick={() => saveRecommendation()}>Get your Recommended Shoe</button>
    </form>
    <RecShoe { ...recShoe }/>
    </div>
  );
};

export default Recommendation;