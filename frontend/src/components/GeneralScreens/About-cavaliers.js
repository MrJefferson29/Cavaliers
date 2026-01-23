import React, { useState, useEffect } from "react";
import styled from "styled-components";
import kin from '../../Assets/kin.jpg';

const AboutCavaliers = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Header>
        <Title>About Cavaliers</Title>
      </Header>

      <MainContent>
        <TextBlock>
          <p>
            When you meet up with a "Cavalier," you will be immediately taken with these charming people-loving dogs! The Cavalier is a happy-go-lucky, trusting, waggy-tailed dog with glowing "doe eyes" that will melt your heart! They epitomize the term "lap dog" and will seek out and establish themselves on any available lap! Cavaliers are easily trainable since to pleasing us is how they show their love. And because they are so very gentle, they are wonderful with children.
          </p>
        </TextBlock>

        <ImageBlock>
          <img 
            src={kin} 
            alt="Historical painting of children with Cavalier King Charles Spaniels" 
          />
        </ImageBlock>

        <TextBlock>
          <p>
            Cavaliers are of "Royal Origin." During the 16th-18th centuries, Kings and Queens so fancied them, they can be seen in many portraits of that era. The Royal Court took them along on carriage rides to keep the royal laps warm! They scampered freely about the castles, and it was said that King Charles preferred his "beloved Cavaliers" over people! To this day, there is an English law allowing a Cavalier to be present in Parliament!
          </p>
        </TextBlock>

        <TextBlock>
          <p>
            Our Cavalier king Charles are bred for quality, raised with love... We are dedicated to breeding only the selected best in order to promote both optimum health and temperament as well as the well balanced beauty we all have come to love in the Cavalier breed standard... My healthy, happy, beautiful fur babies are placed in family homes where they are "lovingly spoiled" as they should be. I employ spay/neuter contracts to discourage irresponsible breeding. All Lynlee's Cavalier puppies are vet-checked, have their puppy boosters/wormed and are well-socialized before going to their new families.
          </p>
        </TextBlock>

        <HealthGuarantee>
          <p>
            All of my Cavaliers are annually OFA Board Health Certified and I offer a health guarantee against genetic defects for two full years.
          </p>
        </HealthGuarantee>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #F8F5EC;
`;

const Header = styled.header`
  background-color: #D4C5B9;
  padding: 1.5rem 1rem;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 2.5rem;
  }
`;

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #4a4a4a;
  margin: 0;
  letter-spacing: 0.5px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 1.5rem 1rem;
  background-color: #F8F5EC;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    padding: 3rem 3rem;
    gap: 2.5rem;
    max-width: 900px;
  }
`;

const TextBlock = styled.div`
  width: 100%;

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.95rem;
    font-weight: normal;
    color: #2c2c2c;
    text-align: justify;
    line-height: 1.6;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 1rem;
      line-height: 1.7;
    }

    @media (min-width: 1024px) {
      font-size: 1.1rem;
      line-height: 1.8;
    }
  }
`;

const ImageBlock = styled.div`
  width: 100%;
  margin: 0.5rem 0;
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
    max-width: 600px;
    margin: 1rem auto;
    padding: 0.75rem;
  }

  @media (min-width: 1024px) {
    max-width: 700px;
    padding: 1rem;
  }
`;

const HealthGuarantee = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  text-align: center;
  margin: 1rem 0;

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: bold;
    color: #2c2c2c;
    margin: 0;
    line-height: 1.6;

    @media (min-width: 768px) {
      font-size: 1.1rem;
      padding: 0 1rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.2rem;
      padding: 0 2rem;
    }
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 2.5rem;
  }
`;

const Footer = styled.footer`
  background-color: #5d4037;
  color: #fff;
  padding: 1.5rem 1rem;
  text-align: center;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 2.5rem;
  }
`;

const Copyright = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  margin: 0;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 0.85rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const ScrollTopButton = styled.button`
  position: absolute;
  right: 1rem;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0.8;

  &:hover {
    transform: translateY(-3px);
    opacity: 1;
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    font-size: 1.75rem;
    right: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
    right: 3rem;
  }
`;

export default AboutCavaliers;
