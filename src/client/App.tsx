import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../components/GlobalStyle';
import ServiceWrapper from '../components/ServiceWrapper';
import TabBar from '../components/TabBar';

import SouthKoreaMap from '../components/SouthKoreaMap';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ServiceWrapper>
        <SouthKoreaMap />
        <RightSection>
          <TabBar />
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
