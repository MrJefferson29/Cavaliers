import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { List } from 'react-bootstrap-icons';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';
import { AuthContext } from '../../Context/AuthContext';

function Navbar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  const bool = localStorage.getItem("authToken") ? true : false
  const [auth, setAuth] = useState(bool)
  const { activeUser } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handle navigation and close Offcanvas
  const handleNavigate = (path) => {
    navigate(path);
    handleClose(); // Close the navbar after navigation
  };

  useEffect(() => {

    setAuth(bool)
    setTimeout(() => {
        setLoading(false)
    }, 1600)

}, [bool])



  return (
    <NavbarContainer>
      <MenuIcon
        size={30}
        color="aliceblue" // Dark color for the icon
        onClick={handleShow}
        aria-label="Open product categories menu"
      />
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <OffcanvasHeader closeButton>
          <OffcanvasTitle />
        </OffcanvasHeader>
        <Offcanvas.Body>
          <ProductList>
            <ProductItem onClick={() => handleNavigate('/')}>Home</ProductItem>
            {auth? 
            <ProductItem onClick={() => handleNavigate('/addStory')}>Post Pet</ProductItem>
          :
          <></>}
            <ProductItem onClick={() => handleNavigate('/about')}>About</ProductItem>
            <ProductItem onClick={() => handleNavigate('/about-cavaliers')}>About Cavaliers</ProductItem>
            <ProductItem onClick={() => handleNavigate('/all-pets')}>Available Puppies</ProductItem>
            <ProductItem onClick={() => handleNavigate('/health-guarantee')}>Health Guarantee</ProductItem>
            <ProductItem onClick={() => handleNavigate('/about')}>Memory Lane</ProductItem>
            <ProductItem onClick={() => handleNavigate('/contact-us')}>Contact Us</ProductItem>
          </ProductList>
        </Offcanvas.Body>
      </Offcanvas>
    </NavbarContainer>
  );
}

export default Navbar;

// Styled components
const NavbarContainer = styled.div`
  position: relative;
`;

const MenuIcon = styled(List)`
  cursor: pointer;
  color: #1e3d33;
  transition: color 0.3s ease;

  &:hover {
    color: #2d5a4a;
  }
`;

const OffcanvasHeader = styled(Offcanvas.Header)`
  background: linear-gradient(to bottom, #2d5a4a 0%, #1e3d33 100%);
  background-color: #1e3d33;
  color: #fff;
  height: 70px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding: 0 1.5rem;

  .btn-close {
    filter: invert(1);
    opacity: 0.9;
    
    &:hover {
      opacity: 1;
    }
  }
`;

const OffcanvasTitle = styled(Offcanvas.Title)`
  display: none;
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: #f5f5f0;
`;

const ProductItem = styled.div`
  padding: 1rem 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 6px;
  background-color: #fff;
  color: #1e3d33;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #1e3d33;
    color: #fff;
    transform: translateX(5px);
    box-shadow: 0 4px 8px rgba(30, 61, 51, 0.2);
  }
`;
