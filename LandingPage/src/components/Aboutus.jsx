import React, { useEffect } from 'react'
import './Aboutus.css'
import thinkingImage from '../assets/Thinking.png'

const Aboutus = () => {

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

        const element = document.querySelector('.Aboutus');
        observer.observe(element);

        return () => {
            observer.unobserve(element)
        }
    }, [])

    return (
        <div className='Aboutus'>
            <div className="about-content">
                <section className="about-left">
                <div>
                <h1>ABOUT US</h1>
                <div className="title-line"></div>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quis, consectetur soluta recusandae fuga minima quia velit tempore nemo sint facere? Assumenda amet qui tenetur consectetur voluptatum. Accusantium, eos, velit laudantium autem dolore asperiores, vel tempora in nihil exercitationem laboriosam aut voluptate voluptas odit hic iste nostrum itaque illum molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis dolores voluptas quod atque voluptatum porro voluptatibus minus illum esse.</p>
                <button>Read more</button>
                </section>
                <section className='about-right'>
                    <img src={thinkingImage} alt="" />
                </section>
            </div>
        </div>
    )
}

export default Aboutus