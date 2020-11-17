import React  from 'react';
import PropTypes from 'prop-types';
import altra from '../../Assets/Altra.png';
import casc from '../../Assets/Brooks_Cascadia.png';
import ghost from '../../Assets/brooks_ghost.png';
import pegasus from '../../Assets/nike_pegasus.png';
import zoom from '../../Assets/nike_zoom.png';
import pro from '../../Assets/salomon_pro.png';
import super_cross from '../../Assets/salomon_supercross.png';

const RecShoe = ({ model, terrain, durable_miles, avg_stars, shoes_id, img_src }) =>  {
  let img;
  if(img_src === 'Brooks Ghost'){
    img = ghost
  }
  if(img_src === 'Nike Zoom'){
    img = zoom
  }
  if(img_src === 'Altra Lone Peak'){
    img = altra
  }
  if(img_src === 'Salomon Supercross'){
    img = super_cross
  }
  if(img_src === 'Brooks Cascadia'){
    img = casc
  }
  if(img_src === 'Nike Pegasus'){
    img = pegasus
  }
  if(img_src === 'Salomon Ultra Pro'){
    img = pro
  }
  return (
  <section>
    <h3>{model}</h3>
    <img src={img} />
    <p>Best for running on {terrain}</p>
    {/* <p>{shoes_id}</p> */}
    <p>Rating: {avg_stars} stars</p>
    <p>Durable for up to {durable_miles} miles</p>
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