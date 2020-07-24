import React from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';

import 'moment/locale/ko';

import Badge from '../components/Badge';
import RightIcon from '../components/RightIcon';

import { DAYS } from '../utils/constants';

interface IDateSelector {
  currentDate: Date;
  setCurrentDate: (value: Date) => void;
}

const DateSelector: React.FC<IDateSelector> = ({
  currentDate,
  setCurrentDate,
}) => {
  const today = new Date();
  const gapTime = currentDate.valueOf() - today.valueOf();
  const gapDays = Math.ceil(gapTime / DAYS);

  const onClickPrevDay = () =>
    setCurrentDate(new Date(currentDate.getTime() - DAYS));
  const onClickNextDay = () =>
    setCurrentDate(new Date(currentDate.getTime() + DAYS));
  const onClickReset = () =>
    gapDays && setCurrentDate(new Date());

  const badgeText = (() => {
    if (!gapDays) {
      return '오늘';
    }
    if (gapDays < 0) {
      return `${Math.abs(gapDays)}일 전`;
    }
    return `${gapDays}일 후`;
  })();

  return (
    <Wrapper>
      <DateBadge
        gapDays={gapDays}
        onClick={onClickReset}
      >
        {badgeText}
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

interface IDateBadge {
  gapDays?: number;
}

const DateBadge = styled(Badge)<IDateBadge>`
  margin-bottom: 13px;
  color: white;
  background-color: #FF6FAF;
  text-shadow: 5px 5px 16px rgba(255, 43, 161, 0.5);
  box-shadow: none;
  border: 2px solid transparent;
  cursor: pointer;

  ${({ gapDays = 0 }) => gapDays && css`
    text-shadow: none;
    background-color: transparent;
    border: 2px solid #FF6FAF;
    color: #ff59a3;
  `};
`;

const DateText = styled.span`
  font-weight: 900;
  font-size: 32px;
  letter-spacing: -0.8px;
  word-spacing: 5px;
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
