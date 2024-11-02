import React, { useState } from 'react'
import "./services.css";
const Services = () => {
    const [toggleState, setToggleState]=useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
   <section className="services section" id="services">
    <h2 className="section__title">Services</h2>
    <span className="section__subtitle">what i offer</span>

    <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">Portfolio <br></br> Management</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(1)}>View more <i className="uil uil-arrow-right
            services__button-icon"></i>
            
            </span>

            <div className={toggleState === 1 ?"services__modal active-modal":"services__modal"}>
                <div className="services__modal-content">
                    <i  onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Portfolio Management</h3>
                    <p className="services__modal-description">Portfolio Developement</p>


                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Social Media Management.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Portfolio Hosting and Domain Management.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Social Media Campainging.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Regular updation and management.
                    
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Utlization of latest tech stack.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title"><br></br>Pharmacy</h3>
            </div>
            <span onClick={() => toggleTab(2)} className="services__button">View more <i className="uil uil-arrow-right
            services__button-icon"></i>
            
            </span>

            <div className={toggleState === 2 ?"services__modal active-modal":"services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Pharmacy</h3>
                    <p className="services__modal-description">Skilled in pharmacy and lab operations</p>


                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            Proficiency in laboratory operations and analytical techniques.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            Accurate prescription review and patient counseling.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            Accurate prescription review and patient counseling.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            Knowledge of pharmaceutical regulations and compliance standards.
                    
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            Effective communication and teamwork in healthcare settings. Some knowledge of UI/UX .
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">Graphics <br></br> Designer</h3>
            </div>
            <span onClick={() => toggleTab(3)} className="services__button">View more <i className="uil uil-arrow-right
            services__button-icon"></i>
            
            </span>

            <div className={toggleState === 3 ?"services__modal active-modal":"services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Graphical Designer</h3>
                    <p className="services__modal-description">Creative graphics desings</p>


                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            Social Media Graphics.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Ad Campainging
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Event Posters
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Logos
                    
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            Illustration .
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

export default Services