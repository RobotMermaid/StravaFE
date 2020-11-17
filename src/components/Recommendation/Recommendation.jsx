import React, { useState } from 'react';
import styles from './Recommendation.css';
import List from '../List/List';
import ShoeDetail from '../ShoeDetail/ShoeDetail';
import { getRecShoe, getAthleteRecommendedShoeID } from '../Services/API';

const Recommendation = () => {
  const [athleteID, setAthleteID] = useState(null);
  const [recShoeID, setRecShoeID] = useState([]);
  const [recShoe, setRecShoe] = useState({});
  const [rec, setRec] = useState(false);

  const getRecommendation = (e) => {
    getAthleteRecommendedShoeID(athleteID)
    .then(shoeId => setRecShoeID(shoeId))
    getRecShoe(recShoeID[0].shoes_id)
    .then(shoe => setRecShoe(shoe))
    console.log(recShoe)
    setRec(!rec);
    // console.log(athleteID)
  }
  return (
    <div className={styles.Rec}>
      <h1>Top rated shoes</h1>
      <List/>
      <div className={styles.shoeRecBox}>
        <h1>Get a shoe recommendation</h1>
        <form className={styles.shoeRecInput}>
          <input type="text" value={athleteID} onChange={({ target }) => setAthleteID(target.value)} placeholder="Your Athlete ID"/>
          <button className={styles.button} onClick={(e) => {e.preventDefault(); getRecommendation()}}>Get your Recommended Shoe</button>
        </form>
        <div className={rec ? styles.rec : styles.notRec }>
          <h2>Here is your recommended shoe</h2>
          <ShoeDetail {...recShoe}/>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;