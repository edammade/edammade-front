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
          <AreaContainer>
            <AreaName>
              {currentArea}
            </AreaName>
            <SensorList>
              <SensorBox>
                <SensorText>
                  17
                </SensorText>
              </SensorBox>
              <SensorBox>
                <SensorText>
                  24
                </SensorText>
              </SensorBox>
              <SensorBox>
                <SensorText>
                  28
                </SensorText>
              </SensorBox>
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
  box-shadow: 13px 13px 34px #f2f2f2, 
    -13px -13px 34px #ffffff;
`;

const AreaName = styled.span`
  font-size: 38px;
  font-weight: 900;
`;

const SensorList = styled.div`
  display: flex;
  margin-top: 15px;
`;

const SensorBox = styled.div`
  background-color: rgba(176, 216, 255, 0.5);
  border: 3px solid rgba(25, 142, 255, 0.5);
  width: 84px;
  height: 84px;
  border-radius: 18px;
  box-shadow: 8px 8px 12px #a9c1d9,
    -8px -8px 12px rgba(229, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

const SensorText = styled.span`
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  margin-bottom: -7px;
`;

const DataBox = styled.div`
  width: 90%;
  margin-top: 20px;
`;

const DataList = styled.div`
  font-size: 28px;
  font-weight: bold;
  padding: 8px 0;
`;
