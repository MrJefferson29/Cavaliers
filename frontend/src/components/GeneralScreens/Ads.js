import React from 'react';
import styled from 'styled-components';
import hog from '../../Assets/hog.jpg';
import hog2 from '../../Assets/hog2.jpg';
import hog3 from '../../Assets/hog3.jpg';

export default function Ads() {
  return (
    <Styles>
      <Header>
        <Logo>CROWNPUP CAVALIERS</Logo>
      </Header>

      <MainContent>
        <ImageBlock>
          <img 
            src={hog} 
            alt="Cavalier King Charles Spaniel puppies" 
          />
        </ImageBlock>

        <ImageBlock>
          <img 
            src={hog2} 
            alt="Breeders with Cavalier King Charles Spaniels" 
          />
        </ImageBlock>

        <TextBlock>
          <p>
            Welcome To My Little Home On The Web. My home is my dogs' castle. I provide only the best care for my four-legged children. I hope you enjoy looking at my pride and joy as much as I enjoy raising them. Go see all the new puppy on my 'Available Puppies' page. Also please feel free to email me at crownpupcavaliers@gmail.com
          </p>
        </TextBlock>

        <TextBlockWithImage>
          <ImageRight>
            <img 
              src={hog3} 
              alt="Blenheim Cavalier King Charles Spaniel puppy" 
            />
          </ImageRight>
          <TextContent>
            <Heading>My Cavalier King Charles Spaniels ARE my family</Heading>
            <p>
              These precious 'Fur Loves' Fill my life with joy. I have been a reputable AKC breeder for over 20 years. My Dogs live with me, not in a Kennel. My Cavalier Puppies are born in my bedroom and raised in my living room. All my dogs are AKC registered and are OFA Health Certified, and I am now working on my 12th generation of a healthy line of Cavaliers. I have only 4 breeding females and 2 stud boys, therefor I may have puppies available to loving homes occasionally only for family homes, no breeders please, I have a spay and neuter contract so no unethical breeding of my babies All my Cavalier Puppies come with a health guarantee. Current vaccines, along with copies of the parents pedigree and OFA Health certificates.
            </p>
          </TextContent>
        </TextBlockWithImage>

        <TextBlock>
          <SubHeading>Available Puppies</SubHeading>
          <p>
            If you would like to be put on a waiting list send me an email. We have occasional litters of Cavalier Puppies throughout the year. Go see Puppy Page for information regarding upcoming litters. My Cavalier King Charles Spaniels bred for quality, raised with love... We are dedicated to breeding only the selected best Cavaliers in order to promote both optimum health and temperament as well as the well balanced beauty we all have come to love in the Cavalier breed standard. My healthy, happy, beautiful fur Cavalier King Charles are placed in family homes where they are 'lovingly spoiled' as they should be. I employ spay/neuter contracts to discourage irresponsible breeding. All Lynlee's Cavalier Puppies a have their puppy boosters/wormed and are well-socialized before going to their new families.
          </p>
        </TextBlock>
      </MainContent>
    </Styles>
  );
}

const Styles = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background: linear-gradient(to bottom, #2d5a4a 0%, #1e3d33 100%);
  background-color: #1e3d33;
  color: #fff;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 20px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath d='M0,0 L0,20 Q300,10 600,20 T1200,20 L1200,0 Z' fill='%231a3229'/%3E%3C/svg%3E");
    background-size: cover;
    opacity: 0.3;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 3rem;
  }
`;

const Logo = styled.h1`
  font-family: 'Brush Script MT', 'Lucida Handwriting', cursive;
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0;
  color: #fff;
  letter-spacing: 1px;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const MenuIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MainContent = styled.main`
  background-color: #f5f5f0;
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 4rem;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
  }
`;

const ImageBlock = styled.div`
  width: 100%;
  margin: 0;
  padding: 0.5rem;
  background-color: #fff;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    padding: 0.75rem;
    max-width: 800px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    padding: 1rem;
  }
`;

const TextBlock = styled.div`
  width: 100%;
  padding: 1.5rem;
  background-color: #fff;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #000;
    margin: 0;
    text-align: left;
  }

  @media (min-width: 768px) {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;

    p {
      font-size: 1rem;
      line-height: 1.7;
    }
  }

  @media (min-width: 1024px) {
    padding: 2.5rem;
    max-width: 900px;

    p {
      font-size: 1.1rem;
    }
  }
`;

const TextBlockWithImage = styled.div`
  width: 100%;
  padding: 1.5rem;
  background-color: #fff;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 2rem;
    max-width: 1000px;
    margin: 0 auto;
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 2.5rem;
    max-width: 1100px;
    gap: 2.5rem;
  }
`;

const ImageRight = styled.div`
  width: 100%;
  flex-shrink: 0;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    border-radius: 4px;
  }

  @media (min-width: 768px) {
    width: 300px;
    flex-shrink: 0;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }
`;

const TextContent = styled.div`
  flex: 1;

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #000;
    margin: 0;
    text-align: left;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1rem;
      line-height: 1.7;
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 1.1rem;
    }
  }
`;

const Heading = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  color: #000;
  margin: 0 0 1rem 0;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const SubHeading = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  color: #000;
  margin: 0 0 1rem 0;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const Footer = styled.footer`
  background-color: #2c2c2c;
  color: #fff;
  padding: 1.5rem;
  text-align: center;

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.85rem;
    margin: 0;
  }

  @media (min-width: 768px) {
    padding: 2rem;

    p {
      font-size: 0.95rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 2.5rem;

    p {
      font-size: 1rem;
    }
  }
`;
