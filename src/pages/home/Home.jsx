import React from 'react'
import Profile from "../../assets/home1.jpg"
import {Link} from 'react-router-dom'
import{FaArrowRight} from 'react-icons/fa'
import "./home.css"


const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home1__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Karthik Kumar.</span><br/>Web Developer
          </h1>

          <p className="home__description">
            I'm a MERN stack web developer passionate about creating clean, user-centric experiences. With a strong foundation in data structures, I quickly adapt and continuously enhance my skills.
          </p>

          <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home
