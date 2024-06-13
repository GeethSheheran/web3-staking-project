import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Keyframe animations for NavLinks opening and closing
const openAnimation = keyframes`
  from {
    margin-top: 0rem;
    margin-bottom: 0rem;
    opacity: 0;
  }
  to {
    margin-top: 1rem;
    margin-bottom: 5rem;
    opacity: 1;
  }
`;

const closeAnimation = keyframes`
  from {
    margin-top: 1rem;
    margin-bottom: 5rem;
    opacity: 1;
  }
  to {
    margin-top: 0rem;
    margin-bottom: 0rem;
    opacity: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1D2039;
  padding: 1rem 8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  color: white;
  margin-right: auto;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center; 
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    display: ${props => props.isVisible ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    animation: ${props => props.isOpen ? css`${openAnimation} 0.5s ease forwards` : css`${closeAnimation} 0.5s ease forwards`};
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  padding: 0.5rem;
  font-weight: bold;

  &:hover {
    color: #953ff5;
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, rgba(255,0,150,1) 0%, rgba(0,204,255,1) 100%);
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ConnectButton = styled.button`
  background-color: #953ff5;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
  border-radius: 30px;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #222;
    border-color: #000;
    color: white;
    font-weight: bold;
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.9); // Pink glow effect
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 100%;
    background: linear-gradient(90deg, rgba(255,0,150,0.4) 0%, rgba(0,204,255,0.4) 100%);
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-top: -45px;
    margin-bottom: 20px;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  margin-left: auto;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Corresponds to the duration of the closeAnimation
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo>
        <img src="/path-to-your-logo.png" alt="Logo" />
      </Logo>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavLinks isOpen={isOpen} isVisible={isVisible}>
        <NavLink href="./Home">HOME</NavLink>
        <NavLink href="./HowItWorks">HOW IT WORKS</NavLink>
        <NavLink href="./NFTStaking">STAKE</NavLink>
      </NavLinks>
      <ConnectButton>CONNECT</ConnectButton>
    </Nav>
  );
};

export default Navbar;
