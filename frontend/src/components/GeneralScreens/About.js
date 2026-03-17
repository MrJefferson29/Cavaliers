import React from "react";
import styled from "styled-components";
import afro1 from '../../Assets/afro1.jpg';
import afro2 from '../../Assets/afro2.jpg';
import afro3 from '../../Assets/afro3.jpg';
import afro4 from '../../Assets/afro4.jpg';

const About = () => {
  return (
    <Container>
      <Title>About Us</Title>

      <ContentSection>
        <IntroText>
        My wife and I are the owners of Crownpup Cavaliers. We raise our puppies with love and affection alongside our three children. Our puppies are healthy, happy, and grow up playing with kids every day. We are truly blessed by our fur-babies.
        </IntroText>
        <ImageBlock>
          <img 
            src={afro1}
            alt="Woman with four Cavalier King Charles Spaniels" 
          />
        </ImageBlock>
      </ContentSection>

      <ContentSection>
        <Paragraph>
        Here we all are(above pic) my “Fur family’ as you can see  , middle cutie girl is my new baby Maya , Maya is now our 9th generation , to Maya’s right is her mom Cassidy and Cassidy’s mom , our always pretty Grandma Serefina. We are now almost 15 years and 11 generations of healthy, happy Cavaliers.
        </Paragraph>
        <ImageBlock>
          <img 
            src={afro2} 
            alt="Woman on couch with two Cavalier King Charles Spaniels" 
          />
        </ImageBlock>
        <Paragraph>
        My love and passion for the breed shines through in my pups – as we pour our hearts into each one. Feel free to pour through my website and social media pages to learn more…but be careful…you might just catch Cavalier fever like I did over a decade ago!  

With Love,
        </Paragraph>
        <ImageBlock>
          <img 
            src={afro3} 
            alt="Three Cavalier King Charles Spaniels being held" 
          />
        </ImageBlock>
        <Paragraph>
        I care about raising our Cavalier King Charles pups ethically.  I do not believe in over-breeding females and want to make sure we always treat every adult we own with love and respect.  I also value health and personality over color – this is called color blind breeding.  As one of the best Cavalier Breeders, my reputation is what matters most to me.
        </Paragraph>
      </ContentSection>

      <HorizontalRule />

      <ContentSection>
        <ImageBlock>
          <img 
            src={afro4} 
            alt="Woman on couch with five Cavalier King Charles Spaniels" 
          />
        </ImageBlock>
        <Paragraph>
        Bred for quality, raised with love… We are dedicated to breeding only the selected best in order to promote both optimum health and temperament as well as the well balanced beauty we all have come to love in the Cavalier breed standard… My healthy, happy, beautiful fur babies are placed in family homes where they are “lovingly spoiled” as they should be. I employ spay/neuter contracts to discourage irresponsible breeding. All my Cavalier puppies are vet-checked, have their puppy boosters/wormed and are well-socialized before going to their new families.
        </Paragraph>
      </ContentSection>

      <HorizontalRule />
    </Container>
  );
};

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  background-color: #F8F5EC;
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
  font-weight: bold;
  color: #2c2c2c;
  text-align: center;
  margin: 0 0 2rem 0;

  @media (min-width: 768px) {
    font-size: 2.5em;
    margin-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3em;
    margin-bottom: 4rem;
  }
`;

const ContentSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    max-width: 900px;
    margin-bottom: 3.5rem;
  }
`;

const IntroText = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
  font-weight: bold;
  color: #2c2c2c;
  text-align: center;
  margin: 0 0 1rem 0;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1.4em;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.6em;
    max-width: 800px;
  }
`;

const ImageCaption = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  font-weight: normal;
  color: #2c2c2c;
  text-align: center;
  margin: 0 0 1.5rem 0;

  @media (min-width: 768px) {
    font-size: 1em;
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1em;
  }
`;

const ImageBlock = styled.div`
  width: 100%;
  margin: 0 0 1.5rem 0;
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid #e8e8e0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    max-width: 700px;
    padding: 0.75rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    max-width: 800px;
    padding: 1rem;
    margin-bottom: 2.5rem;
  }
`;

const Paragraph = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  font-weight: normal;
  color: #2c2c2c;
  text-align: left;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1.1em;
    line-height: 1.7;
    margin-bottom: 2rem;
    max-width: 700px;
  }

  @media (min-width: 1024px) {
    font-size: 1.15em;
    max-width: 800px;
    margin-bottom: 2.5rem;
  }
`;

const HorizontalRule = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #d4d4c4;
  margin: 2rem 0;

  @media (min-width: 768px) {
    margin: 3rem 0;
    max-width: 700px;
  }

  @media (min-width: 1024px) {
    margin: 3.5rem 0;
    max-width: 800px;
  }
`;

const Footer = styled.footer`
  background-color: #5d4037;
  color: #fff;
  padding: 1.5rem;
  text-align: center;
  width: 100%;
  margin-top: 3rem;

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8em;
    margin: 0;
  }

  @media (min-width: 768px) {
    padding: 2rem;
    margin-top: 4rem;

    p {
      font-size: 0.9em;
    }
  }

  @media (min-width: 1024px) {
    padding: 2.5rem;
    margin-top: 5rem;

    p {
      font-size: 1em;
    }
  }
`;

export default About;
