import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Story = ({ story }) => {
  const truncateContent = (content) => {
    const stripped = content.replace(/<[^>]+>/g, '');
    return stripped.substr(0, 100);
  };

  const truncateTitle = (title) => {
    return title.length > 50 ? title.substr(0, 50) + "..." : title;
  };

  // Get images - support both old imageUrl and new imageUrls
  const images = story.imageUrls && story.imageUrls.length > 0 
    ? story.imageUrls 
    : (story.imageUrl ? [story.imageUrl] : []);

  return (
    <CardContainer>
      <CardLink to={`/story/${story.slug}`}>
        <ImageContainer>
          <CardImage
            src={images[0] || '/default.jpg'}
            alt={story.title}
          />
          {images.length > 1 && (
            <ImageBadge>
              +{images.length - 1} more
            </ImageBadge>
          )}
        </ImageContainer>
        <ContentWrapper>
          <Title>{truncateTitle(story.title)}</Title>
          <Description
            dangerouslySetInnerHTML={{ __html: truncateContent(story.content) + "..." }}
          />
          <Footer>
            <Price>$ {story.price}</Price>
            <Button>Get me now</Button>
          </Footer>
        </ContentWrapper>
      </CardLink>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  max-width: 350px;
  background-color: #fff;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 1rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 768px) {
    max-width: 320px;
  }

  @media (min-width: 1024px) {
    max-width: 350px;
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background-color: #f5f5f0;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ImageBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(30, 61, 51, 0.85);
  color: #fff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  backdrop-filter: blur(5px);
`;

const ContentWrapper = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  min-height: 180px;
`;

const Title = styled.h5`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: #1e3d33;
  margin: 0 0 0.75rem 0;
  line-height: 1.4;
  min-height: 2.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Description = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;
  margin: 0 0 1rem 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  * {
    color: #555;
    font-size: 0.9rem;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid #e8e8e0;
`;

const Price = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: #1e3d33;
  margin: 0;
`;

const Button = styled.button`
  background-color: #1e3d33;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #2d5a4a;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default Story;
