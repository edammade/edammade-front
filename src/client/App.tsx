import React, { useState } from 'react';
import styled from 'styled-components';

import GlobalStyle from '../components/GlobalStyle';
import ServiceWrapper from '../components/ServiceWrapper';

import DateSelector from '../components/DateSelector';
import SensorBox from '../components/SensorBox';
import SouthKoreaMap from '../components/SouthKoreaMap';

const App: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
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
            setCurrentDate={setCurrentDate}
          />
          <AreaContainer>
            <AreaName>
              {currentArea}
            </AreaName>
            <SensorList>
              <SensorBox
                value={17}
                updateAt={currentArea + currentDate}
              />
              <SensorBox
                value={124}
                updateAt={currentArea + currentDate}
              />
              <SensorBox
                value={28}
                updateAt={currentArea + currentDate}
              />
            </SensorList>
          </AreaContainer>
          <DataBox>
            <DataList>💨 풍향 및 풍속</DataList>
            <DataList>☀️ 현재 기상</DataList>
          </DataBox>
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

const AreaContainer = styled.div`
  width: 90%;
  margin-top: 20px;
  background-color: rgba(176, 216, 255, 0.35);
  border-radius: 36px;
  padding: 30px;
`;

const AreaName = styled.span`
  font-size: 32px;
  font-weight: 900;
`;

const SensorList = styled.div`
  display: flex;
  margin-top: 15px;
`;

const DataBox = styled.div`
  width: 90%;
  margin-top: 20px;
`;

const DataList = styled.div`
  font-size: 22px;
  font-weight: bold;
  padding: 10px 0;
  line-height: 1;

  &:last-child {
    margin-top: 5px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-top: 5;
  }
`;
