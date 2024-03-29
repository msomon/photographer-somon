import React, { useState } from 'react';

import { Carousel} from 'react-bootstrap';
import usehooks from '../../Hooks/UseHooks';
import Bundle from './Bundle/Bundle'
import img1 from '../../images/img-1.webp';
import img2 from '../../images/img-2.webp';
import img3 from '../../images/img-3.webp';
import './Home.css'
import Review from './Review/Review';


const Home = () => {

  const {bundles,setBundles}=usehooks()
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
    <div className=''>
    <div className='carosel'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img
        className="d-block w-100 carosel"
        src={img3}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3> Welcome My Website </h3>
        <p>Good Quality Camera</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carosel "
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Welcome Photography World</h3>
        <p>Quality full Picture and Nature</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carosel"
        src={img1}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Your Opinion My Commitment</h3>
        <p>
          Highly Trained Photographer 
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  <h2 className='text-primary text-center mt-5'>Some Bundles Offer </h2>
  
  <div className='bundles row gap-2 '>
   
  {
    bundles.map(bundle=><Bundle bundle={bundle} key={bundle.id}></Bundle>)
  }
  </div>

  <div className='mt-5' >
    <Review></Review>
  </div>
    </div>
  );
};

export default Home;