import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.darkBg};
  color: ${theme.colors.white};
  padding: 3rem 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${theme.colors.white};
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: ${theme.colors.tertiary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.white};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: ${theme.colors.white};
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.tertiary};
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${theme.colors.primary};
  color: ${theme.colors.tertiary};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>AAI Soaps</h3>
          <p>Premium quality soaps and detergents for your daily needs.</p>
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/ingredients">Ingredients</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
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