import React from 'react';
import './Bundle.css'

const Bundles = ({bundle}) => {
  const {img,name,description,price,}=bundle
  console.log(price);
  return (
    <div className='bundle'>
      <img src={img} alt="" />
      <div className='bundle-info'>
      <h4>Name:{name}</h4>
      <p>Description:{description}</p>
      <h5>Price:{price}</h5>
      </div>
      
    </div>
  );
};

export default Bundles;