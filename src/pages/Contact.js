import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';

const ContactContainer = styled.div`
  padding: 100px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    color: #333;
    margin-bottom: 1.5rem;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    color: #444;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const ContactForm = styled.form`
  background: ${theme.colors.white};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    color: ${theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid ${theme.colors.tertiary};
    border-radius: 5px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
    }
  }

  textarea {
    height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;

  &:hover {
    background: ${theme.colors.secondary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  a {
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.secondary};
    }
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
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <ContactGrid>
        <ContactInfo>
          <h2>Get in Touch</h2>
          <InfoItem>
            <h3>Address</h3>
            <p>123 Soap Street<br />Clean City, SC 12345<br />United States</p>
          </InfoItem>
          <InfoItem>
            <h3>Phone</h3>
            <p>+1 (234) 567-8900</p>
          </InfoItem>
          <InfoItem>
            <h3>Email</h3>
            <p>info@aaisoaps.com</p>
          </InfoItem>
          <InfoItem>
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
          </InfoItem>
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
          </SocialLinks>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact; 