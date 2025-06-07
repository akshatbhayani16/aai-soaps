import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';

const FooterContainer = styled.footer`
  background: #232323;
  color: ${theme.colors.white};
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.8;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
`;

const FooterSection = styled.div`
  h3 {
    color: ${theme.colors.white};
    margin-bottom: 1rem;
    font-size: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    color: ${theme.colors.white};
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: ${theme.colors.tertiary};
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 1.1rem;

    &:hover {
      color: ${theme.colors.white};
    }
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

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${theme.colors.primary};
  color: ${theme.colors.white};
  position: relative;
  z-index: 1;
  font-size: 1.1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>AAI Soaps</h3>
          <p>Premium quality soaps and detergents for your daily needs.</p>
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📱</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/ingredients">Ingredients</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Contact Info</h3>
          <ul>
            <li>📞 +1 234 567 890</li>
            <li>✉️ info@aaisoaps.com</li>
            <li>📍 123 Soap Street, Clean City</li>
          </ul>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} AAI Soaps. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 