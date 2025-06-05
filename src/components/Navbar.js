import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';

const Nav = styled.nav`
  background-color: ${theme.colors.darkBg};
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${theme.colors.darkBg};
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${theme.colors.white};

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">AAI Soaps</Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          ☰
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to="/products" onClick={() => setIsOpen(false)}>Products</NavLink>
          <NavLink to="/ingredients" onClick={() => setIsOpen(false)}>Ingredients</NavLink>
          <NavLink to="/blogs" onClick={() => setIsOpen(false)}>Blogs</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 