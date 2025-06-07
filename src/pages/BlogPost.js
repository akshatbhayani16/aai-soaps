import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { theme } from '../theme';

const BlogPostContainer = styled.div`
  padding: 100px 2rem 4rem;
  background-color: ${theme.colors.darkBg};
  color: ${theme.colors.white};
  min-height: 100vh;
`;

const PostContent = styled.article`
  max-width: 800px;
  margin: 0 auto;
  background: linear-gradient(135deg, #2c3e50 0%, #1a2634 100%);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${theme.colors.primary};
`;

const PostHeader = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.8));
  }
`;

const PostTitle = styled.h1`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  color: ${theme.colors.white};
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const PostMeta = styled.div`
  padding: 2rem;
  border-bottom: 1px solid ${theme.colors.primary};
  color: ${theme.colors.tertiary};
  font-size: 0.9rem;
`;

const PostBody = styled.div`
  padding: 2rem;
  line-height: 1.8;
  font-size: 1.1rem;

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    margin: 1.5rem 0;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const BackButton = styled.button`
  position: fixed;
  top: 120px;
  left: 2rem;
  padding: 0.8rem 1.5rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

// Import the blogs data from the Blogs component
const blogs = [
  {
    id: 1,
    title: "The Art of Natural Soap Making",
    date: "March 15, 2024",
    image: "/images/soap-making.jpg",
    content: `Natural soap making is an art that combines science, tradition, and creativity. At AAI Soaps, we've perfected this craft over decades, ensuring each bar meets our high standards of quality and sustainability.

Our process begins with carefully selected natural ingredients, including organic oils, butters, and essential oils. We use the cold process method, which preserves the natural properties of our ingredients while creating a gentle, moisturizing soap.

The key to our success lies in our attention to detail:
- Precise temperature control
- Natural colorants from herbs and clays
- Essential oils for fragrance
- Proper curing time

Each batch is handcrafted in small quantities to ensure quality control and consistency. Our soaps are then cured for 4-6 weeks, allowing them to develop their full potential in terms of hardness, lather, and longevity.

The result is a premium product that's not just effective but also environmentally conscious and gentle on the skin.`
  },
  {
    id: 2,
    title: "Sustainable Cleaning: A Guide to Eco-Friendly Practices",
    date: "March 10, 2024",
    image: "/images/eco-cleaning.jpg",
    content: `Sustainable cleaning is more than just a trend—it's a commitment to protecting our environment while maintaining a healthy home. In this comprehensive guide, we'll explore how to make your cleaning routine more eco-friendly.

Key aspects of sustainable cleaning include:
- Choosing biodegradable products
- Reducing water usage
- Minimizing waste
- Using natural ingredients

Our products are designed with these principles in mind, using plant-based ingredients that break down naturally without harming the environment. We also focus on concentrated formulas that reduce packaging waste and transportation emissions.

The benefits of sustainable cleaning extend beyond environmental protection:
- Better indoor air quality
- Reduced exposure to harsh chemicals
- Cost-effectiveness
- Long-term health benefits

By making small changes to your cleaning routine, you can make a significant impact on both your home environment and the planet.`
  },
  {
    id: 3,
    title: "The Science Behind Natural Detergents",
    date: "March 5, 2024",
    image: "/images/detergent-science.jpg",
    content: `The effectiveness of natural detergents lies in the careful balance of ingredients and their synergistic properties. Let's explore the science behind our cleaning products and how they work to keep your clothes fresh and clean.

Key components in our natural detergents:
- Plant-based surfactants
- Natural enzymes
- Mineral builders
- Essential oils

These ingredients work together to:
- Break down stains
- Remove dirt and grime
- Maintain fabric integrity
- Provide natural freshness

Our research and development team continuously works to improve our formulas, ensuring they meet the highest standards of effectiveness while remaining gentle on fabrics and the environment.`
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogs.find(blog => blog.id === parseInt(id));

  if (!post) {
    return (
      <BlogPostContainer>
        <PostContent>
          <PostBody>
            <h2>Post not found</h2>
            <p>The blog post you're looking for doesn't exist.</p>
          </PostBody>
        </PostContent>
      </BlogPostContainer>
    );
  }

  return (
    <BlogPostContainer>
      <BackButton onClick={() => navigate('/blogs')}>← Back to Blogs</BackButton>
      <PostContent>
        <PostHeader>
          <img src={post.image} alt={post.title} />
          <PostTitle>{post.title}</PostTitle>
        </PostHeader>
        <PostMeta>
          Published on {post.date}
        </PostMeta>
        <PostBody>
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </PostBody>
      </PostContent>
    </BlogPostContainer>
  );
};

export default BlogPost; 