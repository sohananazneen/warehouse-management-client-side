import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/Banner/Banner-pic1.jpg';
import banner2 from '../../../Images/Banner/Banner-pic2.jpg';
import banner3 from '../../../Images/Banner/Banner-pic3.jpg';

const Banner = () => {

    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>Halal Grocery</h5>
                    <p>Your Convenient Online Halal Inventory Management .</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;