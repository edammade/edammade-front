import React from 'react';
import styled from 'styled-components';

import RightIcon from '../components/RightIcon';

const TabBar: React.FC = () => {
  return (
    <Wrapper>
      <DateBadge>
        <span role="img" aria-labelledby="flower-emoji">🌸</span> 오늘
      </DateBadge>
      <Container>
        <LeftButton />
        <DateText>
          2020년 07월 24일
        </DateText>
        <RightButton />
      </Container>
    </Wrapper>
  );
};

export default TabBar;

const Wrapper = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DateBadge = styled.span`
  margin-bottom: 15px;
  padding: 12px 20px;
  padding-bottom: 9px;
  border-radius: 36px;
  background-color: #FF6FAF;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-weight: bold;
  color: white;
  font-size: 19px;
  text-shadow: 5px 5px 16px rgba(255, 43, 161, 0.5);
`;

const DateText = styled.span`
  font-weight: 900;
  font-size: 32px;
  letter-spacing: -0.8px;
  line-height: 1;
  margin-bottom: -2.5px;
`;

const RightButton = styled(RightIcon)`
  height: 32px;
  margin-bottom: 3.7px;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #FF6FAF;
  }
`;

const LeftButton = styled(RightButton)`
  transform: rotate(180deg);
`;
