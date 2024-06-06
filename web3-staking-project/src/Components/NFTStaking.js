import React from 'react';
import styled from 'styled-components';
import PointCard from './PointCard';

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const Div = styled.div`
  background-color: #222;
`

const Card = styled.div`
  width: 500px;
  background-color: rgba(29, 32, 57, 0.5); 
  border: 2px solid rgba(29, 32, 57);
  color: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
`;

const CardTitle = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight:bold
`;

const NFTImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 10px 0;
  background-color: #ccc;
`;

const Info = styled.div`
  font-size: 26px;
  margin: 30px 0;
`;

const Button = styled.button`
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
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.75); /* Pink glow effect */
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
    margin-top: -40px;
    margin-bottom: 20px;
  }
`;

// StakeCard component
const StakeCard = ({ nft, onStake }) => (
  <Card>
    <CardTitle>Stake</CardTitle>
    <NFTImage src={nft.image} alt="NFT" />
    <Info>{nft.available} Available</Info>
    <Button onClick={onStake}>STAKE</Button>
  </Card>
);

// UnstakeCard component
const UnstakeCard = ({ nft, onUnstake }) => (
  <Card>
    <CardTitle>Claim / Unstake</CardTitle>
    <NFTImage src={nft.image} alt="NFT" />
    <Info>{nft.staked} Staked</Info>
    <Button onClick={onUnstake}>UNSTAKE</Button>
  </Card>
);

// Parent component to manage the state
class NFTStaking extends React.Component {
  state = {
    nft: {
      image: 'path_to_default_image.jpg', // Update path as needed
      available: 5,
      staked: 0
    }
  };

  handleStake = () => {
    this.setState(prevState => ({
      nft: {
        ...prevState.nft,
        available: prevState.nft.available - 1,
        staked: prevState.nft.staked + 1,
        image: 'path_to_staked_image.jpg' // Update path as needed
      }
    }));
  };

  handleUnstake = () => {
    this.setState(prevState => ({
      nft: {
        ...prevState.nft,
        available: prevState.nft.available + 1,
        staked: prevState.nft.staked - 1,
        image: 'path_to_available_image.jpg' // Update path as needed
      }
    }));
  };

  render() {
    return (
      <>
      <Div>
      <PointCard />
      <Container>
        <StakeCard nft={this.state.nft} onStake={this.handleStake} />
        <UnstakeCard nft={this.state.nft} onUnstake={this.handleUnstake} />
      </Container>
      </Div>
      </>
    );
  }
}

export default NFTStaking;
