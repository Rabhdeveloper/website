import React from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';
import Footer from './Footer';

import './Home.css';
// import rs from './Image/rs.png'; //logo image
import logo2 from './Image/logo2.png'; 
import AutoSlider from './AutoSlider';
// import Catlog from './Catlog';

function Home() {
  return (
    <div>
      <nav>
        <div className="logo-container">
          <img src={logo2} alt="RS Engineering Logo" className="logo" />
        </div>
        <h2>RS Engineering</h2>
        <ul className='link'>
          <li>
            <Link to="/" className='Link'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='Link'>About</Link>
          </li>
          <li>
          <Link to="/catalogue" className='Link'>Catalogue</Link>

          </li>
          <li>
            {/* <Link to="/register" className='Link'>Register</Link> */}
          </li>
          {/* <li>
            <Link to="/queryform" className='Link'>QueryForm</Link> 
          </li> */}
          <li>
            {/* <Link to="/login" className='Link'>Login</Link>  */}
          </li>
        </ul>
      </nav>
            {/* <Catlog/> */}
      <Main />
      <AutoSlider/>
      <Footer />
    </div>
  );
}

export default Home;
