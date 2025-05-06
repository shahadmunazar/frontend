import React from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/product1.jpg',
      alt: 'Datchik IOT Product'
    },
    {
      id: 2,
      src: '/images/gallery/product2.jpg',
      alt: 'Smart Watch'
    },
    {
      id: 3,
      src: '/images/gallery/product3.jpg',
      alt: 'LED Lighting'
    },
    {
      id: 4,
      src: '/images/gallery/product4.jpg',
      alt: 'Gas Detector'
    },
    {
      id: 5,
      src: '/images/gallery/product5.jpg',
      alt: 'Power Bank'
    },
    {
      id: 6,
      src: '/images/gallery/product6.jpg',
      alt: 'Body Massager'
    }
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>Our Gallery</h1>
        <p>Explore our innovative products and solutions</p>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
            <div className="gallery-overlay">
              <h3>{image.alt}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery; 