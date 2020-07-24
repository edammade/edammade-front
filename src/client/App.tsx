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
                  <SensorField>
                    ㎍/㎥
                  </SensorField>
                </SensorText>
              </SensorBox>
              <SensorBox>
                <SensorText>
                  124
                  <SensorField>
                    ㎍/㎥
                  </SensorField>
                </SensorText>
              </SensorBox>
              <SensorBox>
                <SensorText>
                  28
                  <SensorField>
                    ㎍/㎥
                  </SensorField>
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
`;

const AreaName = styled.span`
  font-size: 32px;
  font-weight: 900;
`;

const SensorList = styled.div`
  display: flex;
  margin-top: 15px;
`;

const SensorBox = styled.div`
  background-color: rgba(176, 216, 255, 0.5);
  border: 3px solid rgba(25, 142, 255, 0.5);
  width: 110px;
  height: 84px;
  border-radius: 18px;
  box-shadow: 8px 8px 12px rgba(169, 193, 217, 0.8),
    -8px -8px 12px rgba(229, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

const SensorText = styled.span`
  font-size: 28px;
  font-weight: 900;
  line-height: 1;
  margin-bottom: -7px;
  font-family: 'Poppins', sans-serif;
  color: rgba(0, 22, 99, 0.85);
`;

const SensorField = styled.span`
  font-family: 'Poppins', 'Noto Sans KR', sans-serif;
  font-size: 12px;
  color: rgba(25, 142, 255, 0.95);
  margin-left: 5px;
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
