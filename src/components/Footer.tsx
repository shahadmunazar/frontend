import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Footer: React.FC = () => {
  // Extract the TCSmartLogo from Navbar
  const TCSmartLogo = (Navbar as any).TCSmartLogo || (() => null);
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-section contact-details">
          <h3>CONTACT DETAILS</h3>
          <TCSmartLogo className="footer-logo" />
          <div className="footer-contact-text">
            <p><span className="footer-location">📍</span> <strong>TC Smart Technology</strong><br />
              H-72, 4th Floor, H Block, Sector 63, Noida, Uttar Pradesh 201301
            </p>
            <p><span className="footer-email">✉️</span> info@tcsmarttechnology.com</p>
            <p><span className="footer-email">✉️</span> support@tcsmarttechnology.com</p>
            <p><span className="footer-phone">📱</span> +91 7307290418</p>
            <p><span className="footer-phone">📞</span> 05414-299265</p>
            <p><span className="footer-phone">📞</span> 01204548384</p>
          </div>
        </div>
        <div className="footer-section about-us">
          <h3>ABOUT US</h3>
          <p>
            We utilize our experience in System software and IoT to transform ingenious ideas into intelligent products for the world's most recognizable companies. <strong>TC Smart Technology</strong> is a privately held electronics design company. We deliver a quality experience from the genesis of your concept to product development, production, and after-market product support.
          </p>
        </div>
        <div className="footer-section services">
          <h3>OUR SERVICES</h3>
          <ul>
            <li>Embedded Engineering Services</li>
            <li>Embedded Hardware Development services</li>
          </ul>
        </div>
        <div className="footer-section products">
          <h3>OUR PRODUCTS</h3>
          <ul>
            <li><Link to="/products/datchik-iot-product">TC Smart Technology IOT product</Link></li>
            <li><Link to="/products/datchik-smart-solution">TC Smart Technology Smart Watch</Link></li>
            <li><Link to="/products/datchik-lighting-product">TC Smart Technology Lighting product</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2021 All Rights Reserved By TC Smart Technology</div>
        <div>Developed By - TC Smart Technology</div>
      </div>
    </footer>
  );
};

export default Footer; 