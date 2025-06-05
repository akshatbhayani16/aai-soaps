import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';

const ProductsContainer = styled.div`
  padding: 100px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${theme.colors.darkBg};
  color: ${theme.colors.white};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.white};
  margin-bottom: 2rem;
  text-align: center;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid ${theme.colors.primary};
  background: ${props => props.active ? theme.colors.primary : 'transparent'};
  color: ${props => props.active ? theme.colors.white : theme.colors.primary};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled(motion.div)`
  background: ${theme.colors.darkBg};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid ${theme.colors.primary};

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const ProductInfo = styled.div`
  padding: 1.5rem;

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${theme.colors.white};
    margin-bottom: 1rem;
  }
`;

const Price = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${theme.colors.secondary};
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${theme.colors.secondary};
  }
`;

const products = [
  {
    id: 1,
    name: 'Lavender Soap',
    category: 'soaps',
    price: 5.99,
    image: '/images/lavender-soap.jpg',
    description: 'Handmade lavender soap with natural essential oils'
  },
  {
    id: 2,
    name: 'Eco Detergent',
    category: 'detergents',
    price: 12.99,
    image: '/images/eco-detergent.jpg',
    description: 'Eco-friendly laundry detergent for sensitive skin'
  },
  {
    id: 3,
    name: 'Tea Tree Soap',
    category: 'soaps',
    price: 6.99,
    image: '/images/tea-tree-soap.jpg',
    description: 'Antibacterial tea tree soap for deep cleansing'
  },
  {
    id: 4,
    name: 'Bamboo Dish Soap',
    category: 'detergents',
    price: 8.99,
    image: '/images/bamboo-dish-soap.jpg',
    description: 'Natural dish soap with bamboo extract'
  }
];

const Products = () => {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(product => product.category === filter);

  return (
    <ProductsContainer>
      <Title>Our Products</Title>
      
      <FilterContainer>
        <FilterButton
          active={filter === 'all'}
          onClick={() => setFilter('all')}
        >
          All Products
        </FilterButton>
        <FilterButton
          active={filter === 'soaps'}
          onClick={() => setFilter('soaps')}
        >
          Soaps
        </FilterButton>
        <FilterButton
          active={filter === 'detergents'}
          onClick={() => setFilter('detergents')}
        >
          Detergents
        </FilterButton>
      </FilterContainer>

      <ProductGrid>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img src={product.image} alt={product.name} />
            <ProductInfo>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <Price>${product.price}</Price>
              <AddToCartButton>Add to Cart</AddToCartButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductsContainer>
  );
};

export default Products; 