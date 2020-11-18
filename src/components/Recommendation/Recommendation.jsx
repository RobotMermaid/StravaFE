import React, { useState, useEffect } from 'react';
import styles from './Recommendation.css';
import List from '../List/List';
import ShoeDetail from '../ShoeDetail/ShoeDetail';
import { getAthleteRecommendedShoe } from '../Services/API';

const Recommendation = () => {
  const [athleteID, setAthleteID] = useState(0);
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
        <p>For testing use Athlete Id of 1, 2 or 3</p>
        <form className={styles.shoeRecInput}>
          <div>
            <p>Enter Athlete Id</p>
            <input type="text" value={athleteID} onChange={({ target }) => setAthleteID(target.value)} placeholder="Your Athlete ID"/>
          </div>
          <button className={styles.button} onClick={(e) => { e.preventDefault(); getRecommendation();}}>Get your Recommended Shoe</button>
        </form>
        <div className={rec ? styles.rec : styles.notRec}>
          <h2>We recommend</h2>
          {shoesList}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;