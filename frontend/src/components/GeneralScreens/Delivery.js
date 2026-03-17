import React from 'react';
import styled from 'styled-components';

const Delivery = () => {
  const deliveryItems = [
    {
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop",
      caption: "Our little girl... will be loved forever!"
    },
    {
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&h=600&fit=crop",
      caption: "Our new families and their loved ones."
    },
    {
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop",
      caption: "Lynlee puppies ready to go to their forever home."
    },
    {
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop",
      caption: "Happy Halloween."
    },
    {
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop",
      caption: "Another happy puppy leaving to his forever family."
    },
    {
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&h=600&fit=crop",
      caption: "First birthday."
    },
    {
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop",
      caption: "Cuddle, cuddle. Our babies."
    },
    {
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop",
      caption: "Happy faces. Our furry kids are ready to spread love and joy..."
    },
    {
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop",
      caption: "We only place our puppies in homes where they will be loved and cherished."
    },
    {
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&h=600&fit=crop",
      caption: "Look at that happy face. Another satisfied customer."
    },
    {
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop",
      caption: "Ready for the ride home."
    },
    {
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop",
      caption: "Lynlee Cavaliers brings happiness to everyone."
    },
    {
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop",
      caption: "Water adventures. Our puppies love to explore and play."
    },
    {
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&h=600&fit=crop",
      caption: "Those eyes."
    },
    {
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop",
      caption: "Our precious babies finding their forever homes."
    },
    {
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop",
      caption: "Family moments with our beloved Cavaliers."
    },
    {
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop",
      caption: "Every puppy brings joy to their new family."
    },
    {
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&h=600&fit=crop",
      caption: "Celebrating special moments with our furry friends."
    },
    {
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop",
      caption: "Lynlee Cavaliers - where love and happiness begin."
    },
    {
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop",
      caption: "Our puppies are ready to bring smiles to your home."
    },
    {
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop",
      caption: "Creating beautiful memories, one puppy at a time."
    },
    {
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&h=600&fit=crop",
      caption: "The journey to forever homes starts here."
    }
  ];

  return (
    <Container>
      <Content>
        {deliveryItems.map((item, index) => (
          <ImageTextPair key={index}>
            <ImageBlock>
              <img src={item.image} alt={`Delivery ${index + 1}`} />
            </ImageBlock>
            <Caption>{item.caption}</Caption>
          </ImageTextPair>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #F8F5EC;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    gap: 2rem;
    max-width: 700px;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    max-width: 1200px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1400px;
  }
`;

const ImageTextPair = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.25rem;
  }

  @media (min-width: 1024px) {
    gap: 1.5rem;
  }
`;

const ImageBlock = styled.div`
  width: 100%;
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid #e8e8e0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    padding: 0.75rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem;
  }
`;

const Caption = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  font-weight: normal;
  color: #4A4A4A;
  text-align: left;
  line-height: 1.5;
  margin: 0;
  padding: 0 0.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    padding: 0 0.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.05rem;
    line-height: 1.7;
    padding: 0 1rem;
  }
`;

export default Delivery;
