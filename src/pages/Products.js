import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';

const ProductsContainer = styled.div`
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

const ProductsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ProductCard = styled(motion.div)`
  background: linear-gradient(135deg, #2c3e50 0%, #1a2634 100%);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid ${theme.colors.primary};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProductImage = styled.div`
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

const ProductInfo = styled.div`
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

const ProductFeatures = styled.ul`
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

const ProductPrice = styled.div`
  color: ${theme.colors.primary};
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1rem 0;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

const products = [
  {
    id: 1,
    name: "Pure Essence Liquid Wash",
    description: "Gentle yet powerful liquid wash for all your delicate fabrics",
    price: "₹299",
    image: "/images/liquid-wash.jpg",
    features: [
      "Gentle on skin",
      "Suitable for all fabrics",
      "Long-lasting freshness",
      "Eco-friendly formula"
    ]
  },
  {
    id: 2,
    name: "Herbal Oil Soap Bar",
    description: "Traditional oil-based soap with natural ingredients for deep cleansing",
    price: "₹149",
    image: "/images/oil-soap.jpg",
    features: [
      "Natural oils",
      "Moisturizing formula",
      "Long-lasting",
      "Traditional recipe"
    ]
  },
  {
    id: 3,
    name: "Multi-Purpose Liquid Cleaner",
    description: "Versatile cleaning solution for vessels and clothes",
    price: "₹399",
    image: "/images/multi-purpose.jpg",
    features: [
      "Multi-surface cleaning",
      "Stain removal",
      "Anti-bacterial",
      "Fresh fragrance"
    ]
  },
  {
    id: 4,
    name: "Machine Care Liquid Detergent",
    description: "Specially formulated for washing machines",
    price: "₹449",
    image: "/images/machine-liquid.jpg",
    features: [
      "Machine-friendly formula",
      "Low foam",
      "Stain removal",
      "Fabric care"
    ]
  }
];

const Products = () => {
  return (
    <ProductsContainer>
      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover our range of premium cleaning products, crafted with care and natural ingredients
          for effective cleaning while being gentle on your clothes and the environment.
        </motion.p>
      </HeroSection>

      <ProductsGrid>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ProductImage>
              <img src={product.image} alt={product.name} />
            </ProductImage>
            <ProductInfo>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <ProductFeatures>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ProductFeatures>
              <ProductPrice>{product.price}</ProductPrice>
              <AddToCartButton>Add to Cart</AddToCartButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
};

export default Products; 