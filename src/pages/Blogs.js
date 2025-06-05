import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlogsContainer = styled.div`
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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled(motion.article)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BlogImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;

  h2 {
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

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #888;
  font-size: 0.9rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-weight: 500;
  padding: 0;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;

const blogs = [
  {
    id: 1,
    title: 'The Benefits of Natural Soap',
    image: '/images/blog1.jpg',
    excerpt: 'Discover why switching to natural soap can transform your skin care routine and benefit the environment.',
    date: 'March 15, 2024',
    author: 'Sarah Johnson',
    category: 'Skincare'
  },
  {
    id: 2,
    title: 'Eco-Friendly Cleaning Solutions',
    image: '/images/blog2.jpg',
    excerpt: 'Learn about sustainable cleaning practices and how our eco-friendly detergents can help reduce your environmental impact.',
    date: 'March 10, 2024',
    author: 'Mike Chen',
    category: 'Sustainability'
  },
  {
    id: 3,
    title: 'Understanding Soap Ingredients',
    image: '/images/blog3.jpg',
    excerpt: 'A comprehensive guide to understanding the natural ingredients in our soaps and their benefits for your skin.',
    date: 'March 5, 2024',
    author: 'Emma Davis',
    category: 'Ingredients'
  },
  {
    id: 4,
    title: 'DIY Natural Cleaning Products',
    image: '/images/blog4.jpg',
    excerpt: 'Simple recipes and tips for creating your own natural cleaning products at home.',
    date: 'February 28, 2024',
    author: 'John Smith',
    category: 'DIY'
  }
];

const Blogs = () => {
  return (
    <BlogsContainer>
      <Title>Our Blog</Title>
      <BlogGrid>
        {blogs.map(blog => (
          <BlogCard
            key={blog.id}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <BlogImage>
              <img src={blog.image} alt={blog.title} />
            </BlogImage>
            <BlogContent>
              <h2>{blog.title}</h2>
              <p>{blog.excerpt}</p>
              <BlogMeta>
                <span>{blog.date}</span>
                <span>{blog.category}</span>
              </BlogMeta>
              <ReadMoreButton>Read More</ReadMoreButton>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogsContainer>
  );
};

export default Blogs; 