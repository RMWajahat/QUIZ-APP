import React from 'react'
import imag from "../photos and questions/hero-image.webp"
import { FaUserClock } from "react-icons/fa";
import { Link } from 'react-router-dom'
import '../CSS/Home.css'
const Home = () => {
    const mystyle = {
        backgroundImage: `url(${imag})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height :'100vh',
        width:'100%',
    }
  return (
    

    <div>
      <div className="nav">
      <div id="logo">
            <h1>Navy<span>ship</span></h1>
            </div>
            <Link to={'/'}><h3>Home</h3> </Link>
          <Link to="/login"> <h3>login <FaUserClock /></h3> </Link>
            
              
      </div>
      <br /><br />
      <div className="con">
      <div id="left">
        <h1>welcome to <span>Navyship</span></h1>
        <p>
          Welcome aboard to 'Nautical Navigators, 
          where the sea meets the mind in an adventurous journey of knowledge! 
          Set sail on a quest to test your wits and wisdom about all things maritime. 
          From the legendary voyages of historical explorers to the intricate workings 
          of modern naval technology,our quiz app plunges you into the depths of naval 
          history, culture, and innovation.Whether you're a seasoned seafarer or a 
          landlubber curious to explore the vast blue horizon,prepare to embark on a thrilling 
          voyage of discovery. Hoist the sails, weigh anchor,and let the quizzing adventure begin!
          </p>
      </div>
      <div id="right">
      <img src={imag} alt="" />
      </div>
     </div>
    </div>

  )
}

export default Home
