import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col md={4}>
            <FooterSection>
              <FooterLogo>Crownpup Cavaliers</FooterLogo>
              <FooterDescription>
                Quality bred Cavaliers, ready to find a place in your home, and in your heart
                contact us, or visit our store to know more about us.
              </FooterDescription>
            </FooterSection>
          </Col>
          <Col md={4}>
            <FooterSection>
              <FooterTitle>Quick Links</FooterTitle>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact-us">Contact Us</FooterLink>
              <FooterLink href="tel:+14345090633">+1(434) 509-0633</FooterLink>
              <FooterLink href="mailto:crownpupcavaliers@gmail.com@gmail.com">crownpupcavaliers@gmail.com</FooterLink>

            </FooterSection>
          </Col>
          <Col md={4}>
            <FooterSection>
              <FooterTitle>Follow Us</FooterTitle>
              <SocialIcons>
                <SocialIcon href="#" aria-label="Facebook">
                  <Facebook size={24} />
                </SocialIcon>
                <SocialIcon href="#" aria-label="Twitter">
                  <Twitter size={24} />
                </SocialIcon>
                <SocialIcon href="#" aria-label="Instagram">
                  <Instagram size={24} />
                </SocialIcon>
              </SocialIcons>
              <br />
            </FooterSection>
          </Col>
        </Row>
      </Container>
      <FooterBottom>
        <p>&copy; 2026 Crownpup Cavaliers</p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;

// Styled components
const FooterContainer = styled.footer`
  background: linear-gradient(to bottom, #2d5a4a 0%, #1e3d33 100%);
  background-color: #1e3d33;
  color: #fff;
  padding: 3rem 0 0;
  font-family: Arial, Helvetica, sans-serif;
`;

const FooterSection = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const FooterLogo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fff;
  font-family: 'Brush Script MT', 'Lucida Handwriting', cursive;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const FooterDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #fff;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

const FooterLink = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease, transform 0.2s ease;
  font-size: 0.95rem;

  &:hover {
    text-decoration: none;
    color: #fff;
    transform: translateX(5px);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialIcon = styled.a`
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);

  &:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 2rem;

  p {
    margin: 0;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (min-width: 768px) {
    padding: 2rem;

    p {
      font-size: 0.9rem;
    }
  }
`;
