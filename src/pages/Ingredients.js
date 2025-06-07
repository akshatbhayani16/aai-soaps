import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';

const IngredientsContainer = styled.div`
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

const IngredientsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const IngredientCard = styled(motion.div)`
  background: linear-gradient(135deg, #2c3e50 0%, #1a2634 100%);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid ${theme.colors.primary};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const IngredientImage = styled.div`
  height: 250px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.7));
  }
`;

const IngredientInfo = styled.div`
  padding: 1.5rem;

  h3 {
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${theme.colors.white};
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const IngredientBenefits = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  li {
    color: ${theme.colors.tertiary};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;

    &::before {
      content: '•';
      color: ${theme.colors.primary};
      margin-right: 0.5rem;
    }
  }
`;

const IngredientSource = styled.div`
  color: ${theme.colors.primary};
  font-size: 0.9rem;
  font-style: italic;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${theme.colors.primary};
`;

const ingredients = [
  {
    id: 1,
    name: "Natural Coconut Oil",
    description: "Premium grade coconut oil extracted from fresh coconuts",
    image: "/images/coconut-oil.jpg",
    benefits: [
      "Deep moisturizing properties",
      "Natural antibacterial agent",
      "Rich in fatty acids",
      "Gentle on skin"
    ],
    source: "Sourced from organic coconut farms in Kerala"
  },
  {
    id: 2,
    name: "Pure Neem Extract",
    description: "Concentrated neem extract with natural medicinal properties",
    image: "/images/neem.jpg",
    benefits: [
      "Natural antiseptic",
      "Skin healing properties",
      "Anti-inflammatory",
      "Antibacterial action"
    ],
    source: "Harvested from certified organic neem trees"
  },
  {
    id: 3,
    name: "Aloe Vera Gel",
    description: "Fresh aloe vera gel with maximum potency",
    image: "/images/aloe-vera.jpg",
    benefits: [
      "Soothing and cooling",
      "Natural moisturizer",
      "Skin repair properties",
      "Anti-inflammatory"
    ],
    source: "Extracted from organically grown aloe vera plants"
  },
  {
    id: 4,
    name: "Essential Oils Blend",
    description: "Premium blend of natural essential oils",
    image: "/images/essential-oils.jpg",
    benefits: [
      "Natural fragrance",
      "Therapeutic properties",
      "Antimicrobial effects",
      "Mood enhancement"
    ],
    source: "Sourced from certified organic farms worldwide"
  },
  {
    id: 5,
    name: "Natural Glycerin",
    description: "Vegetable-based glycerin for superior moisturizing",
    image: "/images/glycerin.jpg",
    benefits: [
      "Intense hydration",
      "Skin barrier protection",
      "Non-comedogenic",
      "Suitable for all skin types"
    ],
    source: "Derived from sustainable palm oil sources"
  },
  {
    id: 6,
    name: "Bentonite Clay",
    description: "Natural mineral clay with deep cleansing properties",
    image: "/images/bentonite.jpg",
    benefits: [
      "Deep pore cleansing",
      "Mineral rich",
      "Natural detoxifier",
      "Oil balancing"
    ],
    source: "Mined from certified natural deposits"
  }
];

const Ingredients = () => {
  return (
    <IngredientsContainer>
      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Ingredients
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We use only the finest natural ingredients, carefully selected for their quality,
          effectiveness, and environmental sustainability. Each ingredient is chosen for its
          specific benefits and contribution to our products' performance.
        </motion.p>
      </HeroSection>

      <IngredientsGrid>
        {ingredients.map((ingredient) => (
          <IngredientCard
            key={ingredient.id}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <IngredientImage>
              <img src={ingredient.image} alt={ingredient.name} />
            </IngredientImage>
            <IngredientInfo>
              <h3>{ingredient.name}</h3>
              <p>{ingredient.description}</p>
              <IngredientBenefits>
                {ingredient.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </IngredientBenefits>
              <IngredientSource>{ingredient.source}</IngredientSource>
            </IngredientInfo>
          </IngredientCard>
        ))}
      </IngredientsGrid>
    </IngredientsContainer>
  );
};

export default Ingredients; 