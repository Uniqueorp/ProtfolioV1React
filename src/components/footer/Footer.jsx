import React from 'react'
import "./footer.css";


const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer__container container">
    <h1 className="footer__title">Aditya</h1>

    <ul className="footer__list">
        <li>
            <a href="#about" className="footer__link">About</a>
        </li>

        <li>
            <a href="#experience" className="footer__link">Experience</a>
        </li>
        <li>
            <a href="#Skills" className="footer__link">Skills</a>
        </li>
        <li>
            <a href="#services" className="footer__link">Services</a>
        </li>
        <li>
            <a href="#qualification" className="footer__link">Qualifications</a>
        </li>

    </ul>
    <div className="footer__social">
    <a href="https://www.instagram.com/s_aadityapratap_194?igsh=cHE1MHVuNnJydDc0" className="footer__social-link" target="_blank">
        <i class="bx bxl-instagram"></i>
        </a>


        <a href="https://www.linkedin.com/in/aditya-pratap-singh-268567333/" className="footer__social-link" target="_blank">
        <i class="bx bxl-linkedin"></i>
        </a>


        <a href="https://twitter.com/killthescorpion?t=ICfuwnrp3aLVaqJsabsJ7A&s=09" className="footer__social-link" target="_blank">
        <i class="bx bxl-twitter"></i>
        </a>
    </div>
    <span className="footer__copy">&#169;  Uniqueorp. All rights reserved</span>
   </div>
   </footer>
  )
}

export default Footer