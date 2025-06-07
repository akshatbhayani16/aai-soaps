import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';

const AboutContainer = styled.div`
  padding: 100px 2rem 4rem;
  background-color: ${theme.colors.darkBg};
  color: ${theme.colors.white};
`;

const HeroSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 4rem 0;
  position: relative;
  background: linear-gradient(135deg, ${theme.colors.darkBg} 0%, #1a1a1a 100%);

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

const ExperienceSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  background: linear-gradient(135deg, #2c3e50 0%, #1a2634 100%);
  border-radius: 20px;
  margin: 2rem auto;
  padding: 4rem 2rem;
`;

const ExperienceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid ${theme.colors.primary};
  backdrop-filter: blur(10px);

  h3 {
    color: ${theme.colors.primary};
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.colors.white};
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const StorySection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  background: linear-gradient(135deg, #1a1a1a 0%, ${theme.colors.darkBg} 100%);
  border-radius: 20px;
  margin: 2rem auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StoryContent = styled.div`
  h2 {
    color: ${theme.colors.primary};
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: ${theme.colors.white};
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const StoryImage = styled.div`
  img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ValuesSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
  background: linear-gradient(135deg, #2c3e50 0%, #1a2634 100%);
  border-radius: 20px;
  margin: 2rem auto;
  padding: 4rem 2rem;

  h2 {
    color: ${theme.colors.primary};
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid ${theme.colors.primary};
  backdrop-filter: blur(10px);

  h3 {
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  p {
    color: ${theme.colors.white};
    line-height: 1.6;
  }
`;

const TeamSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
  text-align: center;
  background: linear-gradient(135deg, #1a1a1a 0%, ${theme.colors.darkBg} 100%);
  border-radius: 20px;
  margin: 2rem auto;
  padding: 4rem 2rem;

  h2 {
    color: ${theme.colors.primary};
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamMember = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid ${theme.colors.primary};
  backdrop-filter: blur(10px);

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .info {
    padding: 1.5rem;

    h3 {
      color: ${theme.colors.primary};
      margin-bottom: 0.5rem;
    }

    p {
      color: ${theme.colors.white};
      font-size: 0.9rem;
    }
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          With over 25 years of expertise in manufacturing premium soaps, detergents, and cleaning products,
          we've built our reputation on quality, innovation, and environmental responsibility.
        </motion.p>
      </HeroSection>

      <ExperienceSection>
        <ExperienceCard
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <h3>25+</h3>
          <p>Years of Manufacturing Excellence</p>
        </ExperienceCard>
        <ExperienceCard
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <h3>100+</h3>
          <p>Product Varieties</p>
        </ExperienceCard>
        <ExperienceCard
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <h3>50+</h3>
          <p>Countries Served</p>
        </ExperienceCard>
      </ExperienceSection>

      <StorySection>
        <StoryContent>
          <h2>Our Journey</h2>
          <p>
            Founded in 1998, AAI Soaps began with a simple mission: to create high-quality,
            eco-friendly cleaning products that make a difference. What started as a small
            family business has grown into a global leader in sustainable cleaning solutions.
          </p>
          <p>
            Our commitment to using natural ingredients and sustainable manufacturing
            processes has remained unchanged throughout our journey. We believe in creating
            products that are not only effective but also kind to the environment.
          </p>
        </StoryContent>
        <StoryImage>
          <img src="/images/factory.jpg" alt="Our Manufacturing Facility" />
        </StoryImage>
      </StorySection>

      <ValuesSection>
        <h2>Our Core Values</h2>
        <ValuesGrid>
          <ValueCard
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Sustainability</h3>
            <p>Committed to eco-friendly practices and sustainable manufacturing</p>
          </ValueCard>
          <ValueCard
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Quality</h3>
            <p>Uncompromising standards in every product we create</p>
          </ValueCard>
          <ValueCard
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Innovation</h3>
            <p>Constantly evolving and improving our products</p>
          </ValueCard>
          <ValueCard
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Integrity</h3>
            <p>Honest and transparent in all our business practices</p>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>

      <TeamSection>
        <h2>Our Leadership Team</h2>
        <TeamGrid>
          <TeamMember
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/images/ceo.jpg" alt="CEO" />
            <div className="info">
              <h3>John Smith</h3>
              <p>Founder & CEO</p>
            </div>
          </TeamMember>
          <TeamMember
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/images/cto.jpg" alt="CTO" />
            <div className="info">
              <h3>Sarah Johnson</h3>
              <p>Chief Technology Officer</p>
            </div>
          </TeamMember>
          <TeamMember
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/images/operations.jpg" alt="Operations Director" />
            <div className="info">
              <h3>Michael Chen</h3>
              <p>Operations Director</p>
            </div>
          </TeamMember>
        </TeamGrid>
      </TeamSection>
    </AboutContainer>
  );
};

export default About; 