import React from 'react';
import styled from 'styled-components';

const TabBar: React.FC = () => {
  return (
    <Container>
      <DateContainer>
        <DateBadge>
          🌸 오늘
        </DateBadge>
        <DateText>
          2020년 07월 24일
        </DateText>
      </DateContainer>
    </Container>
  );
};

export default TabBar;

const Container = styled.div`
  padding: 10px 0;
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
  font-weight: 900;
  color: white;
  font-size: 19px;
  text-shadow: 5px 5px 16px rgba(255, 43, 161, 0.65);
`;

const DateText = styled.span`
  font-weight: 900;
  font-size: 32px;
  letter-spacing: -0.8px;
`;
