import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for border-radius and border color animation
const animateBorder = keyframes`
  0% {
    border-radius: 8px;
    border-color: #6528f7;
  }
  50% {
    border-radius: 20px;
    border-color: #fff;
  }
  100% {
    border-radius: 8px;
    border-color: #5511f8;
  }
`;

// Keyframes for text color animation
const colorShift = keyframes`
  0% {
    color: #6528f7;
  }
  50% {
    color: #fff;
  }
  100% {
    color: #5511f8;
  }
`;

// Styled container
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #222;
  padding: 5%;
`;

// Styled card components
const Card = styled.div`
  flex: 1;
  margin: 10px;
  padding: 20px;
  background-color: rgba(29, 32, 57, 0.6); 
  color: white;
  border: 5px solid blue;
  animation: ${animateBorder} 3s infinite ease-in-out;
`;

const Title = styled.h2`
  border-bottom: 1px solid grey;
  padding-bottom: 10px;
  margin: 20px;
`;

const Content = styled.p`
  margin-top: 10px;
  margin: 20px;
  font-weight: bold;
`;

// Styled header with color animation
const AnimatedHeader = styled.h1`
  text-align: left;
  background-color: #222;
  color: #fff;
  padding: 50px 0px 0px 80px;
  margin: 0;
  animation: ${colorShift} 6s infinite ease-in-out;
`;

// RightCard component
const RightCard = ({ title, content }) => (
  <Card>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </Card>
);

// LeftCard component
const LeftCard = () => (
  <Card>
    <Title>Gameplay:</Title>
    <Content>
      In the world of SoB NFT's, staking your NFT isn't just about earning rewards. It is about to start a journey.
      <br /><br />
      By staking your NFT, you generate SoB points and passive $ETH income. But here's the twist – once you unstake your NFT you will lose your SoB points. Also, you can claim $ETH rewards one time. Make sure you stack them and claim.
      <br /><br />
      Do you seize the rewards now or wait to maximize their potential?
      <br /><br />
      Each NFT grants you a stake in the royalties, offering a share of the profits and volume generated. It's not just about individual gains – it's about contributing to the collective success of the SoB NFT's ecosystem.
      <br /><br />
      The choice is yours, but choose wisely – the future of your SoB NFT's depends on it.
    </Content>
  </Card>
);

// Main component
const HowItWorks = () => (
  <div>
    <AnimatedHeader>HOW IT WORKS</AnimatedHeader>
    <Container>
      <LeftCard />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <RightCard 
          title="SoB Points:"
          content="Stakers not only receive Ethereum rewards but also accumulate SoB Points by staking their NFTs. The number of SoB Points earned corresponds to the quantity of NFTs staked by each participant. These SoB Points serve as the foundation for receiving $SOB Airdrop. Essentially, the more NFTs you stake, the greater the accumulation of points, resulting in higher $SOB Airdrop."
        />
        <RightCard 
          title="Another Aspect:"
          content="Another important aspect of the SoB ecosystem is community involvement. Engage with other stakers, participate in governance, and help steer the direction of the project. Your involvement not only enhances your standing within the community but also increases the overall value of your NFTs."
        />
      </div>
    </Container>
  </div>
);

export default HowItWorks;
