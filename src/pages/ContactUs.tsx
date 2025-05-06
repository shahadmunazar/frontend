import React from 'react';
import './ContactUs.css';

const ContactUs: React.FC = () => {
  return (
    <div className="contactus-mainpage">
      <div className="contactus-maincolumns">
        {/* Contact Details */}
        <div className="contactus-section contactus-details">
          <h3>CONTACT DETAILS</h3>
          <img src="/images/logo.png" alt="TC Smart Technology Logo" className="contactus-logo" />
          <div className="contactus-contact-text">
            <p><span className="contactus-icon">📍</span> <strong>TC Smart Technology</strong><br />
              H-72, 4th Floor, H Block, Sector 63, Noida, Uttar Pradesh 201301
            </p>
            <p><span className="contactus-icon">✉️</span> info@tcsmarttechnology.com</p>
            <p><span className="contactus-icon">✉️</span> support@tcsmarttechnology.com</p>
            <p><span className="contactus-icon">📱</span> +91 7307290418</p>
            <p><span className="contactus-icon">📞</span> 05414-299265</p>
            <p><span className="contactus-icon">📞</span> 01204548384</p>
          </div>
        </div>
        {/* About Us */}
        <div className="contactus-section contactus-about">
          <h3>ABOUT US</h3>
          <p>
            We utilize our experience in System software and IoT to transform ingenious ideas into intelligent products for the world's most recognizable companies. <strong>TC Smart Technology</strong> is a privately held electronics design company. We deliver a quality experience from the genesis of your concept to product development, production, and after-market product support.
          </p>
        </div>
        {/* Our Products */}
        <div className="contactus-section contactus-products">
          <h3>OUR PRODUCTS</h3>
          <ul>
            <li>TC Smart Technology IOT product</li>
            <li>TC Smart Technology Smart Watch</li>
            <li>TC Smart Technology Lighting product</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 