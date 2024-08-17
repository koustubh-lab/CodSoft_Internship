import React, { useEffect } from 'react'
import './Services.css'
import thinkingImage from '../assets/BusinessImage.jpg'

const Services = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, {
            threshold: 0.1 // Trigger animation when 10% of the element is in view
        });

        const element = document.querySelector('.Services');
        observer.observe(element);

        return () => {
            observer.unobserve(element)
        }
    }, [])

    return (
        <div className='Services'>
            <div className="service-title">
                <h1>OUR SERVICES</h1>
                <div className="title-line"></div>
            </div>
            <div className="service-list">
                <section>
                    <img src={thinkingImage} alt="" />
                    <h2>User Experience</h2>
                </section>
                <section>
                    <img src={thinkingImage} alt="" />
                    <h2>Creative Design</h2>
                </section>
                <section>
                    <img src={thinkingImage} alt="" />
                    <h2>Rapid Development</h2>
                </section>
            </div>
        </div>
    )
}

export default Services