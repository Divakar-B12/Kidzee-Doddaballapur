import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Build a foundation for a life time of learning</h1>
        <p>We believe that there is unique potential in every child, and Kidzee nurtures it. Touted as one of the best preschools in India, we nurture and shape young minds with the help of our best-in-class, age-appropriate, progressive curriculum. We are changing the face of early childhood education through consistent upgradation and innovation to meet current needs while proactively preparing children for the future. Our focus is on grooming them to be “ever-ready for life.” Our commitment to quality education also emphasizes aspects such as self-reliance, peer interaction, and individual growth. Our strong foundation and well-established educational model create value for all our stakeholders.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
