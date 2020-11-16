import React  from 'react';
import PropTypes from 'prop-types';


const RecShoe = ({ model, terrain, durable_miles, avg_stars, shoes_id }) =>  {
  
  return (
  <section>
    <h3>{terrain}</h3>
    {/* <img src={image} /> */}
    <p>Best for: {model}</p>
    <p>{shoes_id}</p>
    <p>Rating: {avg_stars} stars</p>
    <p>Durable for mileage up to: {durable_miles} mi</p>
  </section>
)};


RecShoe.propTypes = {
  model: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  avg_stars: PropTypes.number.isRequired,
  terrain: PropTypes.string.isRequired,
  durable_miles: PropTypes.number.isRequired,
};

export default RecShoe;