
import { Link } from 'react-router-dom';
import './Bundle.css'



const Bundles = ({bundle}) => {
  const {img,description,price}= bundle ;
     
  return (
      <div className=' bundle lg:cols-4 sm:cols-12'>
      <img src={img} alt="" />
      <div className=''>
      <h4>Package: {bundle.package}</h4>
      <p>Description: {description}</p>
      <h5>Price: {price}</h5>
      <Link className='booking btn btn-success mt-1' to='/checkout'>Booking Now</Link>
      </div>
    </div>
    
  );
};

export default Bundles;