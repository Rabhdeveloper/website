import React from 'react';
import './Frontpage.css';
import vid from './Image/vid9.mp4';

function Frontpage() {
  return (
    <div className="frontpage">
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Welcome Content */}
      <div className="welcome-overlay">
        <h1 className="welcome-title">Welcome to RS Engineering</h1>
        <p className="welcome-tagline">Innovation, Reliability, and Excellence</p>
        <select>
       <option> <button className="explore-button">Explore More</button></option>
       <option> <button className="explore-button">Explore More</button></option>
       <option> <button className="explore-button">Explore More</button></option>

       <option> <button className="explore-button">Explore More</button></option>

        </select>
      </div>
    </div>
  );
}

export default Frontpage;
