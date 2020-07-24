import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import 'moment/locale/ko';

import Badge from '../components/Badge';
import RightIcon from '../components/RightIcon';

interface IDateSelector {
  currentDate: Date;
  onClickPrevDay: () => void;
  onClickNextDay: () => void;
}

const DateSelector: React.FC<IDateSelector> = ({
  currentDate,
  onClickPrevDay,
  onClickNextDay,
}) => {
  return (
    <Wrapper>
      <DateBadge>
        <span role="img" aria-labelledby="flower-emoji">🌸</span> 오늘
      </DateBadge>
      <Container>
        <LeftButton
          onClick={onClickPrevDay}
        />
        <DateText>
          {moment(currentDate).format('LL')}
        </DateText>
        <RightButton
          onClick={onClickNextDay}
        />
      </Container>
    </Wrapper>
  );
};

export default DateSelector;

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

const DateBadge = styled(Badge)`
  margin-bottom: 15px;
  color: white;
  background-color: #FF6FAF;
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
