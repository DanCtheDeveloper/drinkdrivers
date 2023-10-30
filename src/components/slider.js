import React from "react";
import Carousel from 'react-bootstrap/Carousel';


const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={require("./images/ddcarousel.jpg") }
                    height={ 600 }
                    width= { 300 }
                    alt="First slide"   
                />
                <Carousel.Caption>
                    <h3>Cheers!</h3>
                    <p>It's easy, you drink, we drive! DrinkDrivers make alcohol delivery simple and painless as you get to wait in the comfort of your own house.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img 
                    className="d-block w-100"
                    src={require("./images/ddcarousel2.jpg")}
                    height={ 600 }
                    width= { 300 }
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Why Choose DrinkDrivers?</h3>
                    <p>Direct craft beer delivery to your door! Worry free, we deliver your beer ice-cold and ready for consumption</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={require("./images/ddcarousel3.jpg")}
                    height={ 600 }
                    width= { 300 }
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Thank You</h3>
                    <p>
                        We want to thank the growing beer industry and all the amazing vendors for the continuous support. We also want to thank our customers for their continued patronage as well as remembering to drink responsibly .
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;