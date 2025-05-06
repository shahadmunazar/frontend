import React from 'react';
import './Services.css';

const services = [
  'Embedded Software Development',
  'Embedded Hardware Development',
  'Circuit Designing & Prototyping',
  'Product Modelling',
];

const Services = () => (
  <section className="services">
    <h2>Our Services</h2>
    <div className="service-list">
      {services.map((service, idx) => (
        <div className="service-card" key={idx}>{service}</div>
      ))}
    </div>
  </section>
);
export default Services; 