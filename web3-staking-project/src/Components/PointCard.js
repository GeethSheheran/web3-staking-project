import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  padding-left: 120px;
  padding-right: 120px;
`;

const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row; 
  align-items: center; 
  color: white;
  text-align: center;
  padding: 20px;
  margin: 0 10px;
  background-color: rgba(29, 32, 57, 0.2); 
  border: 2px solid rgba(29, 32, 57);
  border-radius: 8px;
  min-width: 150px;
`;

const CardImage = styled.img`
  width: 80px; 
  height: 80px; 
  margin-bottom: 10px; 
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  margin:0 auto;
`;

const FullWidthCard = styled(Card)`
  flex-basis: 100%;
  margin-top: 10px;
`;

const CardTitle = styled.div`
  font-size: 16px;
`;

const CardValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 5px; 
`;

const PointCard = () => {
  return (
    <CardContainer>
      <Card>
        <CardImage src="../public/stake.png" alt="Staked" />
        <CardBody>
          <CardTitle>STAKED</CardTitle>
          <CardValue>0</CardValue>
        </CardBody>
      </Card>
      <Card>
        <CardImage src="path_to_rewards_image.jpg" alt="Rewards per NFT" />
        <CardBody>
          <CardTitle>REWARDS PER NFT</CardTitle>
          <CardValue>0.00000000 ETH/Day</CardValue>
        </CardBody>
      </Card>
      <Card>
        <CardImage src="path_to_eth_pending_image.jpg" alt="ETH Pending" />
        <CardBody>
          <CardTitle>ETH PENDING</CardTitle>
          <CardValue>0.00000000</CardValue>
        </CardBody>
      </Card>
      <Card>
        <CardImage src="path_to_earned_points_image.jpg" alt="Earned Point" />
        <CardBody>
          <CardTitle>Earned Point</CardTitle>
          <CardValue>0</CardValue>
        </CardBody>
      </Card>
      <FullWidthCard>
        <CardImage src="path_to_total_distributed_image.jpg" alt="Total Distributed Point" />
        <CardBody>
          <CardTitle>Total Distributed Point</CardTitle>
          <CardValue>108300000</CardValue>
        </CardBody>
      </FullWidthCard>
    </CardContainer>
  );
}

export default PointCard;
