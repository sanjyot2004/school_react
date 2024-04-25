import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './slide6.1.jpg'; 
import img2 from './slide5.jpg'; 
import img3 from './slide7.jpg'; 
import img4 from './slide9.jpg'; 

export default function MyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Update active index cyclically
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Run effect only once on component mount

  return (
    <>
      <Carousel  pause={false} wrap={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            style={{ borderRadius: '0%' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            style={{ borderRadius: '0%' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            style={{ borderRadius: '0%' }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            alt="Third slide"
            style={{ borderRadius: '0%' }}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
