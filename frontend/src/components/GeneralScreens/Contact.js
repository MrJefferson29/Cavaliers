import React, { useState } from 'react';
import styled from 'styled-components';

const CONTACT_EMAIL = 'crownpupcavaliers@gmail.com';

// Container for the entire contact us page
const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem 1rem 4rem;
  background-color: #f5f5f0;
  font-family: Arial, Helvetica, sans-serif;

  @media (min-width: 768px) {
    padding: 3rem 2rem 5rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 3rem 6rem;
    max-width: 900px;
    margin: 0 auto;
  }
`;

// Mission & Policies section
const MissionPoliciesBox = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 700px;
  width: 100%;
  margin-bottom: 2rem;
  text-align: left;

  @media (min-width: 768px) {
    padding: 2.5rem 3rem;
    margin-bottom: 2.5rem;
  }
`;

const MissionTitle = styled.h2`
  font-size: 1.4rem;
  color: #1e3d33;
  margin-bottom: 1rem;
  font-weight: bold;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

const MissionText = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.05rem;
  }
`;

const PoliciesList = styled.ol`
  margin: 0;
  padding-left: 1.25rem;
  color: #333;
  font-size: 0.95rem;
  line-height: 1.8;

  li {
    margin-bottom: 0.75rem;

    @media (min-width: 768px) {
      font-size: 1rem;
      margin-bottom: 0.9rem;
    }
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
  text-align: left;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    padding: 2.5rem 3rem;
    max-width: 650px;
  }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  color: #1e3d33;
  margin-bottom: 1.5rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.75rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.25rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 0.4rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-family: inherit;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #1e3d33;
    box-shadow: 0 0 0 2px rgba(30, 61, 51, 0.15);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-family: inherit;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #1e3d33;
    box-shadow: 0 0 0 2px rgba(30, 61, 51, 0.15);
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    font-weight: normal;
    margin-bottom: 0;
  }

  input[type="radio"] {
    width: auto;
    accent-color: #1e3d33;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #1e3d33;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 0.5rem;

  &:hover {
    background-color: #2d5a4a;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.span`
  color: #c62828;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  display: block;
`;

const SuccessMessage = styled.div`
  background-color: #e8f5e9;
  color: #155724;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
  border: 1px solid #c8e6c9;
`;

// Need Help section
const NeedHelpBox = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  text-align: left;

  @media (min-width: 768px) {
    padding: 2.5rem 3rem;
    max-width: 650px;
  }
`;

const NeedHelpTitle = styled.h2`
  font-size: 1.35rem;
  color: #1e3d33;
  margin-bottom: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const NeedHelpText = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.7;
  margin: 0;
`;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hasCavalier, setHasCavalier] = useState('');
  const [interestedInPuppy, setInterestedInPuppy] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email || !email.trim()) newErrors.email = 'Email is required';
    if (!phone || !phone.trim()) newErrors.phone = 'Phone is required';
    if (!hasCavalier) newErrors.hasCavalier = 'Please select an option';
    if (!interestedInPuppy) newErrors.interestedInPuppy = 'Please select an option';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const body = [
      'CONTACT FORM - Crownpup Cavaliers',
      '---------------------------------',
      '',
      `Name: ${name || '(not provided)'}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      '',
      `Do you have a Cavalier? ${hasCavalier}`,
      `Are you interested in a new puppy? ${interestedInPuppy}`,
      '',
      'How can we help you?',
      message || '(not provided)',
    ].join('\n');

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Contact Form Inquiry - Crownpup Cavaliers')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <ContactUsContainer>
      {/* Mission & Policies */}
      <MissionPoliciesBox>
        <MissionTitle>Our Mission</MissionTitle>
        <MissionText>
          Our mission is simple: sell <strong>SOCIALIZED PUPPIES</strong>—purebred, family, home raised, AKC, kid friendly, other pet friendly Cavalier puppies.
        </MissionText>
        <PoliciesList>
          <li>The Down Payment Deposit Fee of $300 is refundable.</li>
          <li>The Fee to reserve a puppy can be processed online or by phone via  Apple Pay, Chime and Zelle.</li>
          <li>Upon completion of the sale, the down payment fee will be deducted from the sale price of the puppy.</li>
          <li>In the event that more than one person reserves the same puppy, the puppy will be sold to the person who first submits the down payment. Other interested buyer(s) will have the option to choose another puppy or receive a 100% refund of the down payment.</li>
          <li>Puppies being held more than 3–4 weeks beyond the age of 8–10 weeks may require additional payments (up to 1/2 the total price) to hold the puppy, to be determined on a case-by-case basis.</li>
          <li>Unless otherwise specified, all puppies come with a health guarantee and updated vaccinations.</li>
          <li>Your privacy is important to us! We will not use your information for any purpose other than to contact you regarding your purchase and to process your payment and complete the sale.</li>
        </PoliciesList>
      </MissionPoliciesBox>

      {/* Contact Form */}
      <ContactBox>
        <Title>Contact Us</Title>
        {submitted && (
          <SuccessMessage>Your email client (e.g. Gmail) should open with your message pre-filled. Please click Send to submit to crownpupcavaliers@gmail.com.</SuccessMessage>
        )}
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number"
            />
            {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label>Do you have a Cavalier? *</Label>
            <RadioGroup>
              <label>
                <input
                  type="radio"
                  name="hasCavalier"
                  value="Yes"
                  checked={hasCavalier === 'Yes'}
                  onChange={(e) => setHasCavalier(e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="hasCavalier"
                  value="No"
                  checked={hasCavalier === 'No'}
                  onChange={(e) => setHasCavalier(e.target.value)}
                />
                No
              </label>
            </RadioGroup>
            {errors.hasCavalier && <ErrorText>{errors.hasCavalier}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label>Are you interested in a new puppy? *</Label>
            <RadioGroup>
              <label>
                <input
                  type="radio"
                  name="interestedInPuppy"
                  value="Yes"
                  checked={interestedInPuppy === 'Yes'}
                  onChange={(e) => setInterestedInPuppy(e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="interestedInPuppy"
                  value="No"
                  checked={interestedInPuppy === 'No'}
                  onChange={(e) => setInterestedInPuppy(e.target.value)}
                />
                No
              </label>
            </RadioGroup>
            {errors.interestedInPuppy && <ErrorText>{errors.interestedInPuppy}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">How can we help you?</Label>
            <TextArea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message or questions..."
            />
          </FormGroup>
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </ContactBox>

      {/* Need Help */}
      <NeedHelpBox>
        <NeedHelpTitle>Need Help?</NeedHelpTitle>
        <NeedHelpText>
          Welcoming a Cavalier Crownpup Cavaliers or any new puppy into your home is an exciting adventure filled with joy and challenges. We're here to guide you every step of the way—from choosing the right puppy to tips on care, training, and creating a happy home. Reach out anytime with your questions.
        </NeedHelpText>
      </NeedHelpBox>
    </ContactUsContainer>
  );
};

export default Contact;
