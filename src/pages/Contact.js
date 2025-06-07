import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';

const ContactContainer = styled.div`
  padding: 100px 2rem 4rem;
  background-color: ${theme.colors.darkBg};
  color: ${theme.colors.white};
`;

const HeroSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, ${theme.colors.darkBg} 0%, #1a1a1a 100%);
  border-radius: 20px;
  margin-bottom: 3rem;

  h1 {
    font-size: 3.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
    color: ${theme.colors.white};
  }
`;

const ContactGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: linear-gradient(135deg, #2c3e50 0%, #1a2634 100%);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid ${theme.colors.primary};

  h2 {
    color: ${theme.colors.primary};
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const InfoSection = styled.div`
  margin-bottom: 2rem;

  h3 {
    color: ${theme.colors.primary};
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.colors.white};
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  padding: 1rem 0;

  a {
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid ${theme.colors.primary};
    position: relative;

    &:hover {
      color: ${theme.colors.secondary};
      transform: translateY(-3px);
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

      &::after {
        opacity: 1;
        transform: translateY(0);
      }
    }

    &::after {
      content: attr(aria-label);
      position: absolute;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%) translateY(10px);
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.8rem;
      white-space: nowrap;
      opacity: 0;
      transition: all 0.3s ease;
      pointer-events: none;
    }
  }
`;

const ContactForm = styled.form`
  background: linear-gradient(135deg, #2c3e50 0%, #1a2634 100%);
  border-radius: 15px;
  padding: 2.5rem;
  border: 1px solid ${theme.colors.primary};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  h2 {
    color: ${theme.colors.primary};
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.8rem;

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid ${theme.colors.primary};
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    color: ${theme.colors.white};
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${theme.colors.secondary};
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
    }

    &::placeholder {
      color: ${theme.colors.tertiary};
      opacity: 0.7;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
    line-height: 1.6;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const MapSection = styled.div`
  max-width: 1200px;
  margin: 3rem auto;
  background: linear-gradient(135deg, #2c3e50 0%, #1a2634 100%);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid ${theme.colors.primary};

  h2 {
    color: ${theme.colors.primary};
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  iframe {
    width: 100%;
    height: 400px;
    border: none;
    border-radius: 8px;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <ContactContainer>
      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get in touch with us for any inquiries about our products, manufacturing capabilities,
          or partnership opportunities. We're here to help!
        </motion.p>
      </HeroSection>

      <ContactGrid>
        <ContactInfo>
          <h2>Our Location</h2>
          
          <InfoSection>
            {/* <h3>Manufacturing Plant</h3> */}
            <p>AAI Soaps Manufacturing Unit</p>
            <p>Plot No. 123, Industrial Area</p>
            <p>Phase 2, MIDC, Navi Mumbai</p>
            <p>Maharashtra - 400705</p>
            <p>India</p>
          </InfoSection>

          {/* <InfoSection>
            <h3>Corporate Office</h3>
            <p>AAI Soaps Headquarters</p>
            <p>15th Floor, Business Tower</p>
            <p>Bandra Kurla Complex</p>
            <p>Mumbai - 400051</p>
            <p>India</p>
          </InfoSection> */}

          <InfoSection>
            <h3>Contact Information</h3>
            <p>Phone: +91 22 1234 5678</p>
            <p>Email: info@aaisoaps.com</p>
            <p>Business Hours: Mon-Sat, 9:00 AM - 6:00 PM</p>
          </InfoSection>

          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📱</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
          </SocialLinks>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>
          <FormGroup>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </FormGroup>
          <FormGroup>
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </FormGroup>
          <FormGroup>
            {/* <label htmlFor="subject">Subject</label> */}
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject of your message"
              required
            />
          </FormGroup>
          <FormGroup>
            {/* <label htmlFor="message">Message</label> */}
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactGrid>

      <MapSection>
        <h2>Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2627527248957!2d72.9989!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTknNTYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          allowFullScreen=""
          loading="lazy"
          title="Manufacturing Plant Location"
        />
      </MapSection>
    </ContactContainer>
  );
};

export default Contact; 