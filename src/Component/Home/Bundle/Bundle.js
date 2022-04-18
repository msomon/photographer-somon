import React from 'react';
import { Link } from 'react-router-dom';
import './Bundle.css'

const Bundles = ({bundle}) => {
  const {img,description,price}= bundle
  console.log(bundle.package);
  return (
    <div className='bundle'>
      <img src={img} alt="" />
      <div className='bundle-info'>
      <h4>Package: {bundle.package}</h4>
      <p>Description: {description}</p>
      <h5>Price: {price}</h5>
      <Link className='booking btn btn-success' to='/checkout'>Booking Now</Link>
      </div>
      
    </div>
  );
};

export default Bundles;