import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 100px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #444;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
  }

  h3 {
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }
`;

const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ValueItem = styled(motion.li)`
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Section>
        <Title>About AAI Soaps</Title>
        <Text>
          Founded in 2020, AAI Soaps has been dedicated to creating premium quality
          soaps and detergents using only the finest natural ingredients. Our
          commitment to sustainability and eco-friendly practices has made us a
          trusted name in the industry.
        </Text>
        <Text>
          We believe in the power of natural ingredients and their ability to
          provide effective cleaning while being gentle on your skin and the
          environment. Each of our products is carefully crafted by hand,
          ensuring the highest quality and attention to detail.
        </Text>
      </Section>

      <Section>
        <Subtitle>Our Values</Subtitle>
        <ValuesList>
          <ValueItem
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Quality</h3>
            <p>We never compromise on the quality of our ingredients or products.</p>
          </ValueItem>
          <ValueItem
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Sustainability</h3>
            <p>Our commitment to eco-friendly practices guides everything we do.</p>
          </ValueItem>
          <ValueItem
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Innovation</h3>
            <p>We constantly explore new ways to improve our products and processes.</p>
          </ValueItem>
        </ValuesList>
      </Section>

      <Section>
        <Subtitle>Our Team</Subtitle>
        <TeamGrid>
          <TeamMember
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/images/team1.jpg" alt="Team Member" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </TeamMember>
          <TeamMember
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/images/team2.jpg" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Head of Production</p>
          </TeamMember>
          <TeamMember
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/images/team3.jpg" alt="Team Member" />
            <h3>Mike Johnson</h3>
            <p>Quality Control</p>
          </TeamMember>
        </TeamGrid>
      </Section>
    </AboutContainer>
  );
};

export default About; 