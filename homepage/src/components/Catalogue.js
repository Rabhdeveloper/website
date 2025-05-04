import React from 'react';
import './Catalogue.css'; // Link to the CSS file for styles
import img1 from './Image/cat1.jpeg'; // Import product images
import img2 from './Image/cat2.jpeg'; 
import img3 from './Image/cat3.jpeg'; 
import img4 from './Image/cat4.jpeg'; 
import img5 from './Image/cat5.jpeg'; 
import img6 from './Image/cat6.jpeg'; 

function Catalogue() {
  // Sample data for catalogue items
  const catalogueItems = [
    {
      id: 1,
      img: img1,
      title: 'Product 1',
      description: 'High-quality product with amazing features and durability.',
    },
    {
      id: 2,
      img: img2,
      title: 'Product 2',
      description: 'Top-notch design with advanced technology for your needs.',
    },
    {
      id: 3,
      img: img3,
      title: 'Product 3',
      description: 'Affordable and reliable product perfect for everyday use.',
    },
    {
      id: 4,
      img: img4,
      title: 'Product 4',
      description: 'An innovative solution offering exceptional performance and longevity.',
    },
    {
      id: 5,
      img: img5,
      title: 'Product 5',
      description: 'A sleek and modern design that combines aesthetics and functionality.',
    },
    {
      id: 6,
      img: img6,
      title: 'Product 6',
      description: 'Durable, energy-efficient product designed for heavy-duty usage.',
    },
  ];

  return (
    <div className="catalogue-container">
      <h1 className="catalogue-title">Catalogue Page</h1>
      <p className="catalogue-description">
        Discover our exclusive range of products and services. Explore the details below:
      </p>
      <div className="catalogue-grid">
        {catalogueItems.map((item) => (
          <div key={item.id} className="catalogue-item">
            <img src={item.img} alt={item.title} className="catalogue-image" />
            <h2 className="catalogue-item-title">{item.title}</h2>
            <p className="catalogue-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
