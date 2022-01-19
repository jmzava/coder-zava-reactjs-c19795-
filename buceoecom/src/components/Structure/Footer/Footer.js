import React from 'react'
import "./Footer.css"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function Footer() {
    return (
        <section className='footerBuceo'>

            <div className="socialMedia">
            <i>< FaInstagram/></i>
            <i>< FaFacebook/></i>
            <i>< FaTwitter/></i>

            {/* <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a> */}
        </div>
        <br/>
        </section>
    )
}

export default Footer
