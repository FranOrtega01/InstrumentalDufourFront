import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/img/Buque.mp4'
import slide2 from '../../assets/img/video2.mp4'
import slide3 from '../../assets/img/slide3.jpeg'

function ControlledCarousel({alertEffect}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className="slide">
                    <div className="overlay col-12 p-0"></div>
                    <div className="absolute d-flex col-12 p-0 justify-content-center">
                        <div className="col-10 row justify-content-center p-0">
                            <div className="slide1Content col-12">
                                <div>
                                    <h3 className="text-center">Instrumental Dufour</h3>
                                    <p>Providing magnetic compass services and certificates since 1939.</p>
                                </div>
                                <a href="#about-us">Read about us</a>
                            </div>
                        </div>
                    </div>
                    <video src={slide1} muted loop autoPlay playsInline type="video/mp4"></video>

                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slide">
                    <div className="overlay2 col-12 p-0"></div>
                    <div className="absolute d-flex col-12 p-0 justify-content-center">
                        <div className="col-10 p-0">
                            <div className="slide2Content col-lg-8 col-12">
                                <h3 className="">We are the first enterprise to introduce <span>remote adjustment service</span> for magnetic compass.
                                </h3>
                                <p>Have your magnetic compass adjusted remotely. And get all necessaries certificates to be presented to any local or international authority.
                                </p>
                                <a href="#services" id="firstAccordionBtn">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <video src={slide2} muted loop autoPlay playsInline type="video/mp4"></video>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slide">
                    <div className="overlay2 col-12 p-0"></div>
                    <div className="absolute d-flex col-12 p-0 justify-content-center">
                        <div className=" col-10 row justify-content-center p-0">
                            <div className="slide3Content  col-lg-6 col-12">
                                <h3 className="text-center">All your certificates in one place.</h3>
                                <p>Create your ship profile and download all your magnetic compass certificates and documents whenever it is necessary.
                                </p>
                                <a onClick={alertEffect}>Learn more</a>
                            </div>
                        </div>
                    </div>
                    <img src={slide3} alt="Captain using the platform representative image" />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;