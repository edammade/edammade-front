import React, { useState } from 'react';
import styled from 'styled-components';

import GlobalStyle from '../components/GlobalStyle';
import ServiceWrapper from '../components/ServiceWrapper';
import DateSelector from '../components/DateSelector';

import SouthKoreaMap from '../components/SouthKoreaMap';

const DAYS = 1000 * 60 * 60 * 24;

const App: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const onClickPrevDay = () => setCurrentDate(new Date(currentDate.getTime() - DAYS));
  const onClickNextDay = () => setCurrentDate(new Date(currentDate.getTime() + DAYS));

  const [currentArea, setCurrentArea] = useState<string>('서울특별시');

  return (
    <>
      <GlobalStyle />
      <ServiceWrapper>
        <SouthKoreaMap
          currentArea={currentArea}
          setCurrentArea={setCurrentArea}
        />
        <RightSection>
          <DateSelector
            currentDate={currentDate}
            onClickPrevDay={onClickPrevDay}
            onClickNextDay={onClickNextDay}
          />
        </RightSection>
      </ServiceWrapper>
    </>
  );
};

export default App;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  flex: 1;
  align-items: center;
`;
