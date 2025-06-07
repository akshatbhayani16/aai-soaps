import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';

const HomeContainer = styled.div`
  padding-top: 50px;
  background-color: ${theme.colors.darkBg};
  color: ${theme.colors.white};
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/hero-bg.jpg') center/cover;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.white};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, ${theme.colors.darkBg} 0%, transparent 100%);
    opacity: 0.8;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 2rem;
  position: relative;
  z-index: 1;

  h1 {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 1.2rem 2.5rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const FeaturesSection = styled(Section)`
  background-color: ${theme.colors.darkBg};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  text-align: center;
`;

const FeatureCard = styled(motion.div)`
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${theme.colors.primary};
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  h3 {
    color: ${theme.colors.primary};
    margin: 1.5rem 0;
    font-size: 1.5rem;
  }

  p {
    color: ${theme.colors.white};
    line-height: 1.6;
  }
`;

const FeaturedProducts = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #2c3e50 0%, #1a2634 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%);
    z-index: 1;
  }
`;

const ProductsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 2;
`;

const ProductCard = styled(motion.div)`
  background: linear-gradient(135deg, ${theme.colors.darkBg} 0%, #1a1a1a 100%);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid ${theme.colors.primary};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProductInfo = styled.div`
  padding: 1.5rem;

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  p {
    color: ${theme.colors.white};
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .price {
    color: ${theme.colors.secondary};
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const IngredientsSection = styled(Section)`
  background-color: ${theme.colors.darkBg};
`;

const IngredientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
`;

const IngredientCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${theme.colors.primary};
  backdrop-filter: blur(10px);

  h3 {
    color: ${theme.colors.primary};
    margin: 1rem 0;
    font-size: 1.5rem;
  }

  p {
    color: ${theme.colors.white};
    line-height: 1.6;
  }
`;

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Lavender Soap',
      price: 5.99,
      image: '/images/lavender-soap.jpg',
      description: 'Handmade lavender soap with natural essential oils'
    },
    {
      id: 2,
      name: 'Eco Detergent',
      price: 12.99,
      image: '/images/eco-detergent.jpg',
      description: 'Eco-friendly laundry detergent for sensitive skin'
    },
    {
      id: 3,
      name: 'Tea Tree Soap',
      price: 6.99,
      image: '/images/tea-tree-soap.jpg',
      description: 'Antibacterial tea tree soap for deep cleansing'
    }
  ];

  const ingredients = [
    {
      name: 'Natural Oils',
      description: 'Premium quality essential oils extracted from plants and flowers'
    },
    {
      name: 'Organic Herbs',
      description: 'Carefully selected organic herbs for their natural properties'
    },
    {
      name: 'Pure Minerals',
      description: 'Natural minerals that nourish and protect your skin'
    }
  ];

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
        <SectionTitle>Why Choose Us</SectionTitle>
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

      <FeaturedProducts>
        <SectionTitle>Featured Products</SectionTitle>
        <ProductsGrid>
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img src={product.image} alt={product.name} />
              <ProductInfo>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="price">${product.price}</div>
                <Button to={`/products/${product.id}`}>View Details</Button>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductsGrid>
      </FeaturedProducts>

      <IngredientsSection>
        <SectionTitle>Our Ingredients</SectionTitle>
        <IngredientsGrid>
          {ingredients.map((ingredient, index) => (
            <IngredientCard
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{ingredient.name}</h3>
              <p>{ingredient.description}</p>
            </IngredientCard>
          ))}
        </IngredientsGrid>
      </IngredientsSection>
    </HomeContainer>
  );
};

export default Home; 