

import React, { useState } from 'react'
import "./qualification.css"
const Qualification = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" :
            "qualification__button button--flex"
            } onClick={()=> toggleTab(1)}
            >
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>

                <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" :
            "qualification__button button--flex"
            }onClick={()=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Project Development
                </div>
            </div>


            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" :
            "qualification__content "
            }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelor in Pharmacy</h3>
                            <span className="qualification__subtitle">SD College of Pharmacy, Barnala</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021-2025
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">SENIOR SECONDARY</h3>
                            <span className="qualification__subtitle">MSVM, Vijayhata siwan, Bihar </span>                   
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018-2020
                            </div>
                        </div>

                     

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Matriculation</h3>
                            <span className="qualification__subtitle">Emmanuel Mission High School,Siwan</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2017-2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" :
            "qualification__content "
            }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Schiff's Base</h3>
                            <span className="qualification__subtitle">Synthesis of Schiff bases and their eco-friendly applications in green chemistry for sustainable development.</span>
                            <a href='https://drive.google.com/file/d/15P3r_wWrsv3ieBgM4PdMaXZuy738vxbV/view?usp=sharing'>check out</a>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Drug evaluation</h3>
                            <span className="qualification__subtitle">TLC &CHROMATOGRAPHY
On the principles of mentioned techniques we extract and sepa
phytoconstituents follwed by their evaluation</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>

                     
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Formulation of probiotics</h3>
                            <span className="qualification__subtitle">In order to strengthen Gut health with desirable effect , formula
                            Carrot, Pitroot, Pumpkin, Turmeric, Black pipper</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    

                    


                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification