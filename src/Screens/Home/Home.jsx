import React, { useEffect } from 'react'
import './scss/-scss.scss'
import logo from '../../assets/img/logo2.png'
import wpp from '../../assets/img/wpp.png'
import imo from '../../assets/img/imo2.png'
import pna from '../../assets/img/pna2.png'
import simple from '../../assets/img/keppSimple.jpeg'
import paperless from '../../assets/img/goPaperless.jpeg'

import ControlledCarousel from './Carousel'
import { Footer } from './Footer.jsx'
import { ContactForm } from './ContactForm.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {

    const alertEffect = () => {
        let alerta = document.getElementById("alert");
        alerta.classList.remove("hidden");
        alerta.classList.add("showAlert");
        setTimeout(() => {
            alerta.classList.add("hideAlert");
            setTimeout(() => {
                alerta.classList.add("hidden");
                alerta.classList.remove("showAlert");
                alerta.classList.remove("hideAlert");
            }, 1200);
        }, 3000);
    }

    const alertClose = () => {
        let alerta = document.getElementById("alert");
        alerta.classList.add("hide");
        setTimeout(() => {
            alerta.classList.add("hidden");
            alerta.classList.remove("showAlert");
            alerta.classList.remove("hideAlert");
        }, 1200);
    }

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            {/* <!-- Header --> */}
            <header id="header">
                {/* <!-- Logo --> */}
                <div className="grid-header">
                    <div onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}>
                        <h1 className="img-fluid">Instrumental Dufour</h1>
                        <img src={logo} alt="Instrumental Dufour" />
                    </div>
                    {/* <!-- Nav --> */}
                    <nav>
                        <ul>
                            <li className="li"> <a href="#about-us">About us</a></li>
                            <li className="li"> <a href="#services">Services</a></li>
                            <li className="li"> <a href="#contact">Contact</a></li>
                        </ul>
                        <div className="li">
                            <p className="mediaA" onClick={e => alertEffect(e)}> Our platform</p>
                            <p className="mediaA"><i className="fa-solid fa-right-to-bracket" onClick={e => alertEffect(e)}></i></p>

                        </div>
                    </nav>

                    {/* <!-- Sign In --> */}

                    <div className="platformCont">
                        <div className="platform">
                            <p className="mediaB" onClick={e => alertEffect(e)}> Our platform</p>
                            <p className="mediaB"><i className="fa-solid fa-right-to-bracket" onClick={e => alertEffect(e)}></i></p>
                        </div>
                    </div>
                </div>
            </header>

            <main>

                <section id="intro">
                    <ControlledCarousel alertEffect={alertEffect} />
                </section>
                {/* <!-- Platform Alert --> */}

                <div className="hidden" id="alert">
                    <i className="fa-solid fa-circle-info"></i>
                    <span className="msg">Coming soon! We are working for you.</span>
                    <span className="close-btn" onClick={alertClose}><i className="fa fa-xmark"></i></span>
                </div>

                {/* <!-- WhatsApp Logo --> */}

                <a href="https://api.whatsapp.com/send?phone=5491154558216" target="_blank" rel="noreferrer"> <img src={wpp} id="wpp"
                    alt="Whatsapp" /></a>

                {/* <!-- About us --> */}
                <section id="about-us" >
                    <article className="row col-12 justify-content-center" data-aos="fade-up" data-aos-duration="600">
                        <h2 className="main-title col-12">About us</h2>
                        <div className="aboutCard card  col-lg-6 col-md-8 col-11" data-aos="fade-up" data-aos-duration="600">
                            <h3 className="aboutTitle">What we do.</h3>
                            <p>We have been repairing and calibrating magnectic compasses since 1939.</p>
                        </div>
                        <div className="aboutCard card col-lg-6 col-md-8 col-11" data-aos="fade-up" data-aos-duration="600">
                            <h3 className="aboutTitle">Our international validations.</h3>
                            <p>Our enterprise counts with NI-07 authorization from the argentinian Coast Guard Department (PNA) member state of the International Maritime Organization (IMO), making us the only authorized laboratory in the country which can issue certificates with all necessary international and legal validations to be presented to any Coast Guard Authority or organization.</p>
                        </div>

                        <div className="aboutCard card col-lg-6 col-md-8 col-11" data-aos="fade-up" data-aos-duration="600">
                            <h3 className="aboutTitle">Why you should choose us.</h3>
                            <p>We are the first company who introduced an online and fully remote calibration service for magnetic compasses while navigating all around the world, making ships able to posses all documentation required by SOLAS and it's country maritime authorities without docking at ports or having a technician on-board.</p>
                        </div>

                        <div className="col-12 contadores">
                            <div className="cont ocultar">
                                <div className="number" data-cantidad-total="4000">0</div>
                                <p>Issued certificates</p>
                            </div>
                            <div className="cont ocultar">
                                <div className="number" data-cantidad-total="5000">0</div>
                                <p>Repaired compasses</p>
                            </div>
                        </div>

                        {/* <!-- Logo --> */}
                        <div className="certificaciones row flex-no-wrap justify-content-around col-12">
                            <img className="col-xl-3 col-lg-3 col-md-4 col-6" src={pna} alt="Logo Prefectura Naval Argentina" />
                            <img className="col-xl-3 col-lg-3 col-md-4 col-6" src={imo} alt="Logo IMO International Maritime Organization" />
                        </div>

                    </article>
                </section>

                {/* <!-- Whats new --> */}

                <section id="new" className="bg-dark" >
                    <div data-aos="fade-up" data-aos-duration="600">
                        <h2 className="main-title col-12 text-light">What is new</h2>
                        <article className="row col-12 justify-content-center">
                            <div className="flex-row col-11 py-5 my-5 justify-content-center newInfo" data-aos="fade-left" data-aos-duration="600" data-aos-delay="100">
                                <div className="col-xl-7 col-lg-10 col-12 p-0 new-p ">
                                    <h3 className="new-subtitle m-0">Keep it simple.</h3>
                                    <p className="text-light">As a complement to the remote calibration service, we have developed an online platform where each ship has all the magnetic compass certificates uploaded and ready to download whenever necessary. Furthermore, the ship will count with 24/7 assistance if needed. One month before the expiration date the ship will receive a notification in order to renew all magnetic compass certificates.</p>
                                </div>
                                <img className="img-fluid" src={simple} alt="Online platform" />
                            </div>
                            <div className="flex-row-reverse col-11 py-5 my-5 justify-content-center newInfo" data-aos="fade-right" data-aos-delay="100" data-aos-duration="600">
                                <div className="col-xl-7 col-lg-10 col-12 p-0 new-p">
                                    <h3 className="new-subtitle m-0">Go Paperless.</h3>
                                    <p className="text-light">In order to contribute with climate change as well as we increase the security of our work we have replaced the old and traditional hand-drown sign for the digital one. This method speed up the process and count with all legal validations.</p>
                                </div>
                                <img className="img-fluid" src={paperless} alt="Digital sign" />
                            </div>
                        </article>
                    </div>
                </section>

                {/* <!-- Services --> */}

                <section id="services">
                    <article data-aos="fade-up" data-aos-duration="600">
                        <h2 className="services-title col-12">Services</h2>
                        <ul className="col-md-10 col-12" id="accordion">
                            <li>
                                <input type="checkbox" name="accordion" id="firstAccordion" />
                                <label htmlFor="firstAccordion">Remote Calibration<i className="fa-solid fa-angle-down"></i></label>
                                <p className="servicesSubtitle">Get in touch with one of our technicians and receive the step-by-step instruction to calibrate the deviations of your magnetic compass. </p>
                                <div className="contentAccordion">
                                    <h4>How is the procedure?</h4>
                                    <ul>
                                        <li>The technician will send the captain a form to complete with the magnetic compass information needed. Once received and analyzed, the instructions will be sent back in order to proceed as needed. While the job is being performed, in order to and help and check everything is being done as needed the technician will wait online until the adjustement is fully complete. Once all corrections were made, the certificate and deviation sheet will be sent with all legal and international requirements to be presented to the competent authority.
                                        </li>
                                        <li>The communication will be performed directly with the ship's captain or agent via email or WhatsApp. If necessary, all technical departments of your company can be added in copy to have total knowledge of the procedures.
                                        </li>
                                    </ul>
                                    <h4>Advantages for the ship</h4>
                                    <ul>
                                        <li>To perform and online calibration there is no need to get a technician on board preventing like this Covid-19 transmission</li>
                                        <li>There will be one available 24/7 ready to adjust the compass</li>
                                        <li>The ship will be able to perform all adjust procedures while navigating at any location in the world without docking at any port, not delaying the shipment and saving big amounts of time and money.</li>
                                    </ul>
                                    <h4>Advantages for the owner/managers</h4>
                                    <ul>

                                        <li>There is no need for the companies to pay high embarkation and disembarkation costs for the technician.</li>
                                        <li>There is a fix budget which not depends on the amount of time it takes to get the job done, as well, there is no extra cost depending on the day, hour, etc. Bigger the amount of calibrations done cheaper the budget</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" className="label" name="accordion" id="secondAccordion" />
                                <label htmlFor="secondAccordion">On-board calibration
                                    <i className="fa-solid fa-angle-down"></i>
                                </label>
                                <p className="servicesSubtitle">Get a technician on-board who manually calibrates the magnetic compass.</p>

                                <div className="contentAccordion">
                                    <h4>How is the procedure?</h4>
                                    <ul>
                                        <li>The technician will tell the captain to perform certain maneuvers in order to check and adjust the magnetic compass as necessary.</li>
                                        <li>Once all deviations were adjusted, the technician will issue on board the certificates with all legal and international validations. Both will be digitally signed by the technician and the captain.</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" name="accordion" id="thirdAccordion" />
                                <label htmlFor="thirdAccordion">Magnetic compass reparation
                                    <i className="fa-solid fa-angle-down"></i> </label>
                                <p className="servicesSubtitle">Ship or bring us your magnetic compass to our laboratory to have it repaired by a professional technician.</p>

                                <div className="contentAccordion">
                                    <h4>How is the procedure?</h4>
                                    <ul>
                                        <li>Get the magnetic compass inspected in order to identify the problem.</li>
                                        <li>One of our technicians will have it repaired in less than 24 hours.</li>
                                        <li>Once repaired, our technician will issue the compass overhaul certificate counting with a year of warranty included.</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </article>
                </section>

                {/* <!-- Contact --> */}

                <section id="contact" className="bg-light" data-aos="fade-up" data-aos-duration="600">
                    <h2 className="main-title">Contact</h2>

                    <article className="col-12 row justify-content-center">

                        {/* <!-- Inquires --> */}

                        <div className="col-xxl-8 col-xl-8 col-lg-10 col-11">
                            <h3 className="text-center">General Inquires</h3>
                            <div className="inquiresInfo">
                                <div>
                                    <a href="tel:+5491154558216">+54 9 11 5455 8216</a>
                                    <div>
                                        <i className="fa-solid fa-phone"></i>
                                        <p>Call us</p>
                                    </div>
                                </div>

                                <div>
                                    <a href="mailto:info@instrumentaldufour.net?" target="_blank" rel="noreferrer">info@instrumentaldufour.net</a>
                                    <div>
                                        <i className="fa-solid fa-envelope"></i>
                                        <p>Email us</p>
                                    </div>
                                </div>

                                <div>
                                    <a href="https://www.google.com.ar/maps/place/Don+Orione+651,+B1644BMK+Victoria,+Provincia+de+Buenos+Aires/@-34.4498501,-58.5329738,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcafc2bb2d4b9b:0x498bd94a94c1372!8m2!3d-34.4498501!4d-58.5307851!16s%2Fg%2F11mtscl02t" target="_blank" rel="noreferrer">Open in Maps</a>
                                    <div>
                                        <i className="fa-sharp fa-solid fa-location-dot"></i>
                                        <p>Find us</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Form --> */}
                        <ContactForm />
                    </article>
                </section>

                {/* <!-- Footer --> */}
                <Footer />

            </main>
        </>
    )
}
