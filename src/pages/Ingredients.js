import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const IngredientsContainer = styled.div`
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

const IntroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`;

const IngredientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const IngredientCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const IngredientImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const IngredientInfo = styled.div`
  padding: 1.5rem;

  h3 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;

  li {
    color: #666;
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "✓";
      color: #007bff;
      position: absolute;
      left: 0;
    }
  }
`;

const ingredients = [
  {
    id: 1,
    name: 'Coconut Oil',
    image: '/images/coconut-oil.jpg',
    description: 'A natural moisturizer that helps maintain skin hydration and creates a rich, creamy lather.',
    benefits: [
      'Deep moisturizing properties',
      'Natural antibacterial properties',
      'Creates rich, creamy lather',
      'Gentle on sensitive skin'
    ]
  },
  {
    id: 2,
    name: 'Shea Butter',
    image: '/images/shea-butter.jpg',
    description: 'Rich in vitamins and fatty acids, shea butter provides intense moisturization and skin protection.',
    benefits: [
      'Intense moisturization',
      'Rich in vitamins A and E',
      'Natural anti-inflammatory',
      'Promotes skin elasticity'
    ]
  },
  {
    id: 3,
    name: 'Essential Oils',
    image: '/images/essential-oils.jpg',
    description: 'Natural plant extracts that provide therapeutic benefits and natural fragrances.',
    benefits: [
      'Natural aromatherapy benefits',
      'Antimicrobial properties',
      'Skin-soothing effects',
      'No synthetic fragrances'
    ]
  },
  {
    id: 4,
    name: 'Bamboo Extract',
    image: '/images/bamboo.jpg',
    description: 'A sustainable ingredient that provides gentle exfoliation and natural cleaning power.',
    benefits: [
      'Natural exfoliation',
      'Eco-friendly ingredient',
      'Antibacterial properties',
      'Biodegradable'
    ]
  }
];

const Ingredients = () => {
  return (
    <IngredientsContainer>
      <Title>Our Natural Ingredients</Title>
      <IntroText>
        We believe in the power of nature. All our products are made with carefully
        selected natural ingredients that are gentle on your skin and the environment.
        Each ingredient is chosen for its specific benefits and properties.
      </IntroText>

      <IngredientsGrid>
        {ingredients.map(ingredient => (
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
              <BenefitsList>
                {ingredient.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </BenefitsList>
            </IngredientInfo>
          </IngredientCard>
        ))}
      </IngredientsGrid>
    </IngredientsContainer>
  );
};

export default Ingredients; 