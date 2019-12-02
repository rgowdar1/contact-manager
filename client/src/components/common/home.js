import React from 'react'
import {Carousel} from 'react-bootstrap'
export default function Home(props) {
    return (
        <div>
                <div className="text-center">
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/10/21/06/32/mobile-phone-998871__340.jpg" width="80%" height="600px"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>I USED TO THINK CONTACTS ARE MADE OF GLASS   THEY ARE NOT</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2014/08/05/10/28/iphone-410316__340.jpg"  width="80%" height="600px"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>THEY DON'T LIKE YOU BUT STILL FIND THE TIME TO WATCH EERYTHING YOU DO</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2018/11/26/21/28/telephone-3840285__340.jpg" width="80%" height="600px"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>SOME PEOPLES ARE LIKE CLOUDS WHEN THEY DISAPPEAR IT'S A BEAUTIFUL DAY</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        </div>
        
    )
}