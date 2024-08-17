import React from 'react'
import businessImage from '../assets/BusinessImage.jpg'
import '../components/Main.css'

const Main = () => {
  return (
    <div className='Main' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${businessImage})`}}>
        <div className="main-content">
            <h1>Discover Excellence in Every Detail</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem delectus quam neque sunt! Dolore impedit, distinctio perspiciatis consequatur.</h3>
            <div className="main-buttons">
                <button>Get Started <span></span></button>
                <button className='shallow-button'>See More <span></span></button>
            </div>
        </div>
    </div>
  )
}

export default Main