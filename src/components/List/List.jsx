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

  const shoesList = shoes.map(shoe => 
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
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    allies: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    enemies: PropTypes.string,
    image: PropTypes.string.isRequired,
  })).isRequired
};

export default List;