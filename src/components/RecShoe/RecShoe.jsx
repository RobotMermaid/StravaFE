import React  from 'react';
import PropTypes from 'prop-types';


const RecShoe = ({ model, terrain, mileage }) =>  (
  <section>
    <h3>{model}</h3>
    <p>Best for: {terrain}</p>
    <p>Durable for mileage up to: {mileage}</p>
  </section>
);


RecShoe.propTypes = {
  model: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  terrain: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired
};

export default RecShoe;