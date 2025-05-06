import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Rajendra Kumar Verma',
    company: 'Astom Diagnostics Pvt. Ltd.',
    text: 'Nice work by Team Datchik Electronics. Thanks',
  },
  {
    name: 'Rahul Singh',
    company: 'Cityfilters',
    text: 'Really Appreciative, Good work by Datchik Electronics.',
  },
  {
    name: 'Alokdeep',
    company: 'Deep Technology',
    text: 'I am fully satisfied by Team Datchik Electronics for providing great services.',
  },
];

const Testimonials = () => (
  <section className="testimonials">
    <h2>Client's Testimonials</h2>
    <div className="testimonial-list">
      {testimonials.map((t, idx) => (
        <div className="testimonial-card" key={idx}>
          <p className="testimonial-text">{t.text}</p>
          <b className="testimonial-name">{t.name}</b>
          <span className="testimonial-company">{t.company}</span>
        </div>
      ))}
    </div>
  </section>
);
export default Testimonials; 