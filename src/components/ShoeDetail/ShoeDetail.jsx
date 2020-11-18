import React  from 'react';
import PropTypes from 'prop-types';
import findShoeImg from '../Services/shoeImg';

const ShoeDetail = ({ model, terrain, durable_miles, avg_stars, shoes_id, img_src }) =>  {
  let img = findShoeImg(img_src);

  return (
  <section>
    <h3>{model}</h3>
    <img src={img} />
    <p>Best for running on {terrain}</p>
    <p>Rating: {avg_stars} stars</p>
    <p>Durable for up to {durable_miles} miles</p>
  </section>
)};


ShoeDetail.propTypes = {
  model: PropTypes.string,
  id: PropTypes.number,
  avg_stars: PropTypes.number,
  terrain: PropTypes.string,
  durable_miles: PropTypes.number,
};

export default ShoeDetail;