import React, { useEffect, useState , useContext} from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import Navbar from './Navbar';
import { AuthContext } from "../../Context/AuthContext";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const bool = localStorage.getItem("authToken") ? true : false
  const [auth, setAuth] = useState(bool)
  const { activeUser } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024); // Set true for mobile screens
  };

  useEffect(() => {
    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);


  useEffect(() => {

    setAuth(bool)
    setTimeout(() => {
        setLoading(false)
    }, 1600)

}, [bool])

  return (
    <Styles>
      <div className="container">
        <Link to='/' className="logo-link">
          <div className="logo-text">
            <span className="text-bold" style={{fontSize: '1.6rem', fontWeight: '700', color: 'aliceblue', width: '10rem'}}>Crownpup</span>
            <span className="second" style={{fontWeight: '800', color: 'aliceblue'}}>Cavaliers</span>
          </div>
        </Link>
        {!isMobile && ( // Render links only on larger screens
          <div className="icon-wrapper">
            <Link className="link" to="/">Home</Link>
            {auth?
            <Link className="link" to="/addStory">Post Pet</Link>
            : <></>}
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/about-cavaliers">About Cavaliers</Link>
            <Link className="link" to="/all-pets">Available Puppies</Link>
            <Link className="link" to="/health-guarantee">Health Guarantee</Link>
            <Link className="link" to="/about">Memory Lane</Link>
            <Link className="link" to="/contact-us">Purchase Process</Link>
          </div>
        )}
        {isMobile && <Navbar />} {/* Render Navbar only on mobile screens */}
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 0;
  background: linear-gradient(to bottom, #2d5a4a 0%, #1e3d33 100%);
  background-color: #1e3d33;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  height: 70px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0 1.5rem;
    max-width: 1400px;
    margin: 0 auto;

    @media (min-width: 768px) {
      padding: 0 2rem;
    }

    @media (min-width: 1024px) {
      padding: 0 3rem;
    }
  }

  .logo-link {
    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
    color: #fff;
    transition: transform 0.3s ease;
  }

  .logo-image {
    height: 95%;
    width: auto;
    object-fit: cover;
    margin-right: 10px;
    transition: transform 0.3s ease;
  }

  .logo-link:hover {
    transform: scale(1.02);
  }

  .logo-link:hover .logo-image {
    transform: scale(1.05);
  }

  .logo-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .logo-text span {
    font-size: 0.9rem;
    color: #fff;
    font-family: 'Brush Script MT', 'Lucida Handwriting', cursive;
    letter-spacing: 0.5px;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  .icon-wrapper {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    @media (max-width: 1023px) {
      display: none;
    }

    @media (min-width: 1024px) {
      gap: 2rem;
    }
  }

  .icon-wrapper a {
    font-size: 0.95rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    background-color: transparent;
    font-family: Arial, Helvetica, sans-serif;

    @media (min-width: 1024px) {
      font-size: 1rem;
    }
  }

  .icon-wrapper a:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  .search, .user, .plus {
    font-size: 22.5px;
    transition: color 0.3s ease;
  }

  @media (max-width: 1024px) {
    .navbar {
      position: absolute;
      right: 0;
      top: 70px;
      width: 100%;
    }
  }
`;
