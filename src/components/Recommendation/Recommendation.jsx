import React, { useState, useEffect } from 'react';
import styles from './Recommendation.css';
import List from '../List/List';
import ShoeDetail from '../ShoeDetail/ShoeDetail';
import { getAthleteRecommendedShoe } from '../Services/API';

const Recommendation = () => {
  const [athleteID, setAthleteID] = useState(null);
  const [recShoe, setRecShoe] = useState([]);
  const [rec, setRec] = useState(false);


  const getRecommendation = () => {
    getAthleteRecommendedShoe(athleteID)
      .then(shoe => {
        setRecShoe(shoe);
      })
      .then(() => setRec(!rec));
  }
  const shoesList = recShoe.map(shoe => 
    <ul key={shoe.id}>
      <li key={shoe.name}>
        <ShoeDetail {...shoe} />
      </li>
    </ul>
  );
  return (
    <div className={styles.Rec}>
      <h1>Top rated shoes</h1>
      <List/>
      <div className={styles.shoeRecBox}>
        <h1>Get a shoe recommendation</h1>
        <form className={styles.shoeRecInput}>
          <input type="text" value={athleteID} onChange={({ target }) => setAthleteID(target.value)} placeholder="Your Athlete ID"/>
          <button className={styles.button} onClick={(e) => { e.preventDefault(); getRecommendation(); console.log("recShoe: ",recShoe)}}>Get your Recommended Shoe</button>
        </form>
        <div className={styles.rec}>
          <h2>We recommend</h2>
          {/* <h2>{recShoe}</h2> */}
          {shoesList}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;