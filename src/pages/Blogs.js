import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const BlogsContainer = styled.div`
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

const BlogsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const BlogCard = styled(motion.div)`
  background: linear-gradient(135deg, #2c3e50 0%, #1a2634 100%);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid ${theme.colors.primary};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const BlogImage = styled.div`
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

const BlogInfo = styled.div`
  padding: 1.5rem;

  h3 {
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .date {
    color: ${theme.colors.tertiary};
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.colors.white};
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const ReadMoreLink = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  text-decoration: none;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

const blogs = [
  {
    id: 1,
    title: "The Art of Natural Soap Making",
    date: "March 15, 2024",
    image: "/images/soap-making.jpg",
    excerpt: "Discover the traditional methods and modern innovations in natural soap making. Learn how we combine age-old wisdom with contemporary techniques to create our premium products.",
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
    excerpt: "Explore how to maintain a clean home while minimizing environmental impact. Our comprehensive guide covers everything from product selection to cleaning techniques.",
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
    excerpt: "Dive into the fascinating world of natural detergents. Learn how plant-based ingredients work together to provide powerful cleaning without harsh chemicals.",
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

const Blogs = () => {
  return (
    <BlogsContainer>
      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover insights, tips, and stories about natural cleaning, sustainable living,
          and the art of soap making. Stay updated with our latest articles and guides.
        </motion.p>
      </HeroSection>

      <BlogsGrid>
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <BlogImage>
              <img src={blog.image} alt={blog.title} />
            </BlogImage>
            <BlogInfo>
              <h3>{blog.title}</h3>
              <div className="date">{blog.date}</div>
              <p>{blog.excerpt}</p>
              <ReadMoreLink to={`/blog/${blog.id}`}>Read More</ReadMoreLink>
            </BlogInfo>
          </BlogCard>
        ))}
      </BlogsGrid>
    </BlogsContainer>
  );
};

export default Blogs; 