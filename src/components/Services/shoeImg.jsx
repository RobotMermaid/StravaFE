import altra from '../../Assets/Altra.png';
import casc from '../../Assets/Brooks_Cascadia.png';
import ghost from '../../Assets/brooks_ghost.png';
import pegasus from '../../Assets/nike_pegasus.png';
import zoom from '../../Assets/nike_zoom.png';
import pro from '../../Assets/salomon_pro.png';
import super_cross from '../../Assets/salomon_supercross.png';

const findShoeImg = (shoe_model) => {
  let img;
  if(shoe_model === 'Brooks Ghost'){
    img = ghost
  }
  if(shoe_model === 'Nike Zoom'){
    img = zoom
  }
  if(shoe_model === 'Altra Lone Peak'){
    img = altra
  }
  if(shoe_model === 'Salomon Supercross'){
    img = super_cross
  }
  if(shoe_model === 'Brooks Cascadia'){
    img = casc
  }
  if(shoe_model === 'Nike Pegasus'){
    img = pegasus
  }
  if(shoe_model === 'Salomon Ultra Pro'){
    img = pro
  }
  return img;
}
export default findShoeImg;