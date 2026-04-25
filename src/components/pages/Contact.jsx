import React, { useState } from 'react';
import './Contact.css';
import Footer from '../ui/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">Have questions or feedback? We'd love to hear from you.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h3>Our Location</h3>
                <p>New Delhi, India</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div className="info-text">
                <h3>Email Us</h3>
                <p>hello@scribo.ai</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">🌐</div>
              <div className="info-text">
                <h3>Social</h3>
                <div className="social-links">
                  <a href="#">Twitter</a>
                  <a href="#">LinkedIn</a>
                  <a href="#">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more..." rows="5" required></textarea>
            </div>
            <button type="submit" className={`submit-btn ${status}`} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
