import React, { useEffect } from 'react';
import { useCountUp } from 'react-countup';
import styled from 'styled-components';

interface ISensorBox {
  value: number;
  currentArea: string;
}

const SensorBox: React.FC<ISensorBox> = ({
  value,
  currentArea,
}) => {
  const {
    countUp: countedValue,
    start: startCounting,
  } = useCountUp({
    end: value,
    duration: 1.5,
  });

  useEffect(startCounting, [currentArea]);

  return (
    <SensorBoxContainer>
      <SensorText>
        {countedValue}
        <SensorField>
          ㎍/㎥
        </SensorField>
      </SensorText>
    </SensorBoxContainer>
  );
};

export default SensorBox;

const SensorBoxContainer = styled.div`
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
