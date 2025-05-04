import React, { useState, useEffect } from 'react';
import './Content.css';
import vid from './Image/vid3.mp4';
import vid1 from './Image/vid4.mp4';
import video from './Image/vid5.mp4';
import img4 from './Image/4.jpeg';
import img5 from './Image/11.jpeg';

const Content = () => {
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-content');
    if (scrollContainer) {
      const handleMouseEnter = () => setIsScrolling(false);
      const handleMouseLeave = () => setIsScrolling(true);

      scrollContainer.addEventListener('mouseenter', handleMouseEnter);
      scrollContainer.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="most">
      <div className="grid-container">

        {/* Main Content */}
        <div className="content">
          <h2>Main Content</h2>
          <p>This is the main content area where your primary content will go.</p>

          {/* Scrolling News Section */}
          <div
            className="scroll-container"
          >
            <div className={`scroll-content ${isScrolling ? 'scrolling' : ''}`}> 
              {/* News Item 1 */}
              <div className="news-item">
                <div className="row mb-4">
                  <div className="col-sm-3 xs-box">
                    <img
                      src={img4}
                      alt=""
                      className="w-100"
                      width="150"
                      height="100"
                    />
                  </div>
                  <div className="col-sm-9">
                    <div className="box-services-b">
                      <h3 className="title-small mb0">
                        <a href="https://www.powergen-india.com/summit" target="_blank"
                          rel="noopener noreferrer" >
                          Summit
                        </a>
                      </h3>
                      <small>
                        <i className="fa fa-clock-o mr10"></i>26th &amp; 28th
                        September 2023
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              {/* News Item 2 */}
              <div className="news-item">
                <div className="row mb-4">
                  <div className="col-sm-3 xs-box">
                    <img
                      src={img5}
                      alt="Trends in Technology in 2024"
                      className="w-100"
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className="col-sm-9">
                    <div className="box-services-b">
                      <h3 className="title-small mb0">
                        <a href="/">
                          Trends in Technology in 2024 - Season 14 
                        </a>
                        <a
                          href="images/latest-news/style-and-trends.webp"
                          className="link-read-more xs-mt0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          read more
                        </a>
                      </h3>
                      <small>
                        <i className="fa fa-clock-o mr10"></i>31st May 2024
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add more news items as needed */}
            </div>
          </div>
        </div>

        {/* Sidebar 1 - Information */}
        <div className="sidebar">
          <h2>Information</h2>
          <video autoPlay muted loop className="sidebar-video" preload="auto">
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>This is a sidebar with additional information.</p>
        </div>

        {/* Sidebar 2 - Projects */}
        <div className="sidebar2">
          <h2> Projects</h2>
          <video autoPlay muted loop className="sidebar-video" preload="auto">
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>This is a sidebar with additional information...</p>
        </div>

        {/* Service Section */}
        <div className="content2">
          <h2><b>Our Service</b></h2>
          <div className="paragraph">
            <p><strong><b>We provide the best service as you want.</b></strong></p>
          </div>
          <video autoPlay muted loop className="service-video" preload="auto">
            <source src={video} type="video/mp4" />
            Its working
          </video>
        </div>

        {/* Our Team Section */}
        <div className="content2">
          <h2><b>Our Team</b></h2>
          <div className="paragraph">
            <p><strong><b>Our dedicated team of experts.</b></strong></p>
          </div>
          <video autoPlay muted loop className="service-video" preload="auto">
            <source src={vid} type="video/mp4" />
            Meet the team
          </video>
        </div>

        {/* Clients Section */}
        <div className="content2">
          <h2><b>Our Clients</b></h2>
          <div className="paragraph">
            <p><strong><b>We are trusted by leading companies.</b></strong></p>
          </div>
          <div className="client-links">
            <a
              href="https://solarhubenergy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              SolarHub
            </a>
            <br />
            <a
              href="https://www.jims.in/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jims Sector 3
            </a>
            <br />
            <a
              href="https://nilkamal.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nilkamal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;