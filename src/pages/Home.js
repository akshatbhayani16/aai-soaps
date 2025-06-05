import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';

const HomeContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/hero-bg.jpg') center/cover;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 2rem;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${theme.colors.darkBg};
  color: ${theme.colors.white};
`;

const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const FeatureCard = styled(motion.div)`
  padding: 2rem;
  background: ${theme.colors.darkBg};
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid ${theme.colors.primary};

  h3 {
    color: ${theme.colors.primary};
    margin: 1rem 0;
  }

  p {
    color: ${theme.colors.white};
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Pure & Natural Soaps
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our premium collection of handcrafted soaps and detergents
            made with natural ingredients for your daily care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button to="/products">Shop Now</Button>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <FeaturesGrid>
          <FeatureCard
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Natural Ingredients</h3>
            <p>Made with 100% natural and organic ingredients</p>
          </FeatureCard>

          <FeatureCard
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Eco-Friendly</h3>
            <p>Sustainable packaging and production methods</p>
          </FeatureCard>

          <FeatureCard
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Handcrafted</h3>
            <p>Each product is carefully made by hand</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </HomeContainer>
  );
};

export default Home; 