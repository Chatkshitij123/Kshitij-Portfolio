import React, { useState } from 'react';
import "../css/Services.css";
export default function Services() {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index)=>{
        setToggleState(index);
    }
  return (
    
    <section className="services section" id="services">
    <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What i offer</span>

    <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">
                    Product <br/> Designer
                    </h3>
            </div>

            <span className="services__button" onClick={()=>
            toggleTab(1)}>
                View More
            <i className="uil uil-arrow-right
            services__button-icon"></i></span>

            <div className={toggleState ===1 ? "services__modal active-modal"
            : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=> toggleTab(0)} className="uil uil-times
                    services__modal-close"></i>

                    <h3 className="services__modal-title">Product Designer</h3>
                    <p className="services__modal-description">Service
                    with more than 30+ projects.
                    Providing quality work to clients and
                    companies.</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                            Develop dynamic user interfaces with React.js.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                            Build scalable back-end applications with Node.js and Express.js.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                            Design and manage databases with MongoDB.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                                I position your company brand.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                                Design and mockups of projects for companies.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                            Implement user authentication and authorization.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                            Optimize application performance on client and server sides.
                            Provide ongoing maintenance and technical support.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                            Provide ongoing maintenance and technical support.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">UI/UX <br/> Designer</h3>
            </div>

            <span onClick={()=>
            toggleTab(2)} className="services__button">
                View More
            <i className="uil uil-arrow-right
            services__button-icon"></i></span>

            <div className={toggleState ===2 ? "services__modal active-modal"
            : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=> toggleTab(0)} className="uil uil-times
                    services__modal-close"></i>

                    <h3 className="services__modal-title">UI/UX Designer</h3>
                    <p className="services__modal-description">Service
                    with more than 40+ projects.
                    Providing quality work to clients and
                    companies.</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                            Develop intuitive and responsive user interfaces.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                            Create wireframes, prototypes, and mockups.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                            Implement UX best practices to enhance user experience.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                            Provide ongoing UI/UX improvements and updates.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                            Optimize designs for mobile and web platforms.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">Full Stack <br/>
                Developer
                </h3>
            </div>

            <span onClick={()=>
            toggleTab(3)} className="services__button">
                View More
            <i className="uil uil-arrow-right
            services__button-icon"></i></span>

            <div className={toggleState ===3 ? "services__modal active-modal"
            : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=> toggleTab(0)} className="uil uil-times
                    services__modal-close"></i>

                    <h3 className="services__modal-title">Full Stack Developer</h3>
                    <p className="services__modal-description">Service
                    with more than 40+ projects.
                    Providing quality work to clients and
                    companies.</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                            Develop responsive front-end interfaces with HTML, CSS, and JavaScript.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                            Build robust back-end applications with Node.js, Express.js, or other frameworks.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                            Design and manage relational and NoSQL databases.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                            Optimize application performance on both client and server sides.
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle
                            services__modal-icon"></i>
                            <p className="services__modal-info">
                            Conduct code reviews and ensure high coding standards.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>

    </section>
  )
}
