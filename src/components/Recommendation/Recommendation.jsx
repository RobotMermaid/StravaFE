import React, { useState } from 'react';
import styles from './Recommendation.css';
import List from '../List/List';
import ShoeDetail from '../ShoeDetail/ShoeDetail';
import { getAthleteRecommendedShoe } from '../Services/API';

const Recommendation = () => {
  const [athleteID, setAthleteID] = useState(null);
  const [recShoe, setRecShoe] = useState([]);
  const [rec, setRec] = useState(false);

  const getRecommendation = (e) => {
    getAthleteRecommendedShoe(athleteID)
    .then(shoe => setRecShoe(shoe));
    setRec(!rec);
    console.log(athleteID)
  }
  return (
    <div className={styles.Rec}>
      <h1>Top rated shoes</h1>
      <List/>
      <h1>Get a shoe recommendation</h1>
      <form>
        <input type="text" value={athleteID} onChange={({ target }) => setAthleteID(target.value)} placeholder="Your Athlete ID"/>
        <button className={styles.button} onClick={(e) => {e.preventDefault(); getRecommendation()}}>Get your Recommended Shoe</button>
      </form>
      <div className={rec ? styles.rec : styles.notRec }>
        <h2>Here is your recommended shoe</h2>
        <ShoeDetail {...recShoe}/>
      </div>
    </div>
  );
};

export default Recommendation;