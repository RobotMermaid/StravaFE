import React, { useState, useEffect } from 'react';
import { getAllRatings } from '../Services/API';
import List from '../List/List';

const ShoesViewer = () => {
  const [shoes, setShoes] = useState([]);


  useEffect(() => {
    getAllRatings()
      .then(res => setShoes(res));
  }, []);

  return (
    <>
      <section className={styles.viewer}>
        <List shoes={shoes} />
      </section>
    </>
  );
};
export default ShoesViewer;
