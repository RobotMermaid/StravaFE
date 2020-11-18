import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ShoeDetail from '../ShoeDetail/ShoeDetail';
import styles from './List.css';
import { getTopRecommendedShoes } from '../Services/API';

const List = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    getTopRecommendedShoes()
      .then(res => setShoes(res));
  }, []);
  console.log(shoes)
  let top3Shoes = shoes.slice(0,3);
  
  const shoesList = top3Shoes.map(shoe => 
    <ul key={shoe.id}>
      <li key={shoe.name}>
        <ShoeDetail {...shoe} />
      </li>
    </ul>
  );
  return (
    <ul key={5} className={styles.shoes}>
      {shoesList}
    </ul>
  );
};


List.propTypes = {
  shoes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    allies: PropTypes.string,
    affiliation: PropTypes.string,
    enemies: PropTypes.string,
    image: PropTypes.string,
  }))
};

export default List;