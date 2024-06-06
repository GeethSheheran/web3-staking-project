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

const Background = styled.div`
  filter: ${props => props.blur ? 'blur(4px)' : 'none'};
  transition: filter 0.3s;
`;

const Div = styled.div`
  background-color: #222;
`;

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
  font-weight: bold;
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
margin-top: auto;
`;

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  margin-top: auto;
  padding-bottom:4%;
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0,0,0,0.8);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1001;
  width: 80%;
  height: 60%;
  color: white;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: 2px solid white;
  border-radius: 0%;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0 5px;
`;

class NFTStaking extends React.Component {
  state = {
    nft: {
      image: 'path_to_default_image.jpg',
      available: 5,
      staked: 0
    },
    showStakePopup: false,
    showUnstakePopup: false,
  };

  toggleStakePopup = () => {
    this.setState(prevState => ({
      showStakePopup: !prevState.showStakePopup
    }));
  };

  toggleUnstakePopup = () => {
    this.setState(prevState => ({
      showUnstakePopup: !prevState.showUnstakePopup
    }));
  };

  handleStake = () => {
    this.setState(prevState => ({
      nft: {
        ...prevState.nft,
        available: prevState.nft.available - 1,
        staked: prevState.nft.staked + 1,
        image: 'path_to_staked_image.jpg'
      }
    }));
    this.toggleStakePopup();
  };

  handleUnstake = () => {
    this.setState(prevState => ({
      nft: {
        ...prevState.nft,
        available: prevState.nft.available + 1,
        staked: prevState.nft.staked - 1,
        image: 'path_to_available_image.jpg'
      }
    }));
    this.toggleUnstakePopup();
  };

  render() {
    const { nft, showStakePopup, showUnstakePopup } = this.state;

    return (
      <>
        <Background blur={showStakePopup || showUnstakePopup}>
          <Div>
            <PointCard />
            <Container>
              <Card>
                <CardTitle>Stake</CardTitle>
                <NFTImage src={nft.image} alt="NFT" />
                <Info>{nft.available} Available</Info>
                <Button onClick={this.toggleStakePopup}>STAKE</Button>
              </Card>
              <Card>
                <CardTitle>Claim / Unstake</CardTitle>
                <NFTImage src={nft.image} alt="NFT" />
                <Info>{nft.staked} Staked</Info>
                <Button onClick={this.toggleUnstakePopup}>UNSTAKE</Button>
              </Card>
            </Container>
          </Div>
        </Background>
        {showStakePopup && (
          <Popup>
            <CloseButton onClick={this.toggleStakePopup}>×</CloseButton>
            <h1>My NFTs</h1>
            <Button onClick={this.handleStake}>Stake</Button>
          </Popup>
        )}
        {showUnstakePopup && (
          <Popup>
            <CloseButton onClick={this.toggleUnstakePopup}>×</CloseButton>
            <h1>My Stake NFTs</h1>
            <ButtonsRow>
              <Button onClick={this.handleUnstake}>Claim</Button>
              <Button onClick={this.toggleUnstakePopup}>Unstake</Button>
            </ButtonsRow>
          </Popup>
        )}
      </>
    );
  }
}

export default NFTStaking;
