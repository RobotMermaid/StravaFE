import React  from 'react';
import PropTypes from 'prop-types';


const RecShoe = ({ model, terrain, mileage, image }) =>  (
  <section>
    <h3>{model}</h3>
    <img src={image} />
    <p>Best for: {terrain}</p>
    <p>Durable for mileage up to: {mileage}</p>
  </section>
);


RecShoe.propTypes = {
  model: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  terrain: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default RecShoe;