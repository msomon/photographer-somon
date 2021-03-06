
import { Link } from 'react-router-dom';
import './Bundle.css'



const Bundles = ({bundle}) => {
  const {img,description,price}= bundle ;
     
  return (
      <div className='bundle h-100'>
      <img src={img} alt="" />
      <div className='bundle-info'>
      <h4>Package: {bundle.package}</h4>
      <p>Description: {description}</p>
      <h5>Price: {price}</h5>
      <Link className='booking btn btn-success mt-1' to='/checkout'>Booking Now</Link>
      </div>
    </div>
    
  );
};

export default Bundles;