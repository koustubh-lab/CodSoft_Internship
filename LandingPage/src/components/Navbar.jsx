import React from 'react'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="contact-info">
                <section className='links'>
                    <a href="https://www.instagram.com" target='_blank'><img src={instagram} alt="" /></a>
                    <a href="https://www.facebook.com" target='_blank'><img src={facebook} alt="" /></a>
                    <a href="https://www.linkedin.com" target='_blank'><img src={linkedin} alt="" /></a>
                    <a href="https://www.twitter.com" target='_blank'><img src={twitter} alt="" /></a>
                </section>

                <section className='mail-num'>
                    <p>+91: 11-111-11111</p>
                    <span>|</span>
                    <p>Example123@gmail.com</p>
                </section>
            </div>
            {/* <div className="line"></div> */}
            <div className="navigation">
                <section className="nav-title">
                    <a href=""><h1>Landing Page</h1></a>
                </section>
                <section className="nav-options">
                    <nav>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Skills</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </section>
            </div>
            {/* <div className="mobile-navbar">
                <section className='links'>
                    <a href="https://www.instagram.com" target='_blank'><img src={instagram} alt="" /></a>
                    <a href="https://www.facebook.com" target='_blank'><img src={facebook} alt="" /></a>
                    <a href="https://www.linkedin.com" target='_blank'><img src={linkedin} alt="" /></a>
                    <a href="https://www.twitter.com" target='_blank'><img src={twitter} alt="" /></a>
                </section>
                <section className="nav-options">
                    <nav>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Skills</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </section>
            </div> */}
        </div>
    )
}

export default Navbar