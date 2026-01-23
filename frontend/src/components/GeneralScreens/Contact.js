import React from 'react';
import styled from 'styled-components';

// Container for the entire contact us page
const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: #f5f5f0;
  font-family: Arial, Helvetica, sans-serif;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem;
  }
`;

// Contact form box
const ContactBox = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    padding: 3rem;
    max-width: 700px;
  }

  @media (min-width: 1024px) {
    padding: 3.5rem;
  }
`;

// Title of the form
const Title = styled.h1`
  font-size: 2rem;
  color: #1e3d33;
  margin-bottom: 1.5rem;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

// Paragraph description
const Description = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 2rem;
  line-height: 1.7;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }
`;

// Email Button
const EmailButton = styled.button`
  background-color: #1e3d33;
  color: #ffffff;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #2d5a4a;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 61, 51, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    padding: 1.2rem 3rem;
  }
`;

// Open the email client with a pre-filled message
const handleEmailClick = () => {
  window.location.href = "mailto:crownpupcavaliers@gmail.com";
};

const Contact = () => {
  return (
    <ContactUsContainer>
      <ContactBox>
        <Title>Contact Us</Title>
        <Description>
          We'd love to hear from you! Please feel free to get in touch using the button below, and we will get back to you as soon as possible.
        </Description>
        <EmailButton onClick={handleEmailClick}>Send Email</EmailButton>
      </ContactBox>
    </ContactUsContainer>
  );
};

export default Contact;
