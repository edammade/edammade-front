import React from 'react';

import GlobalStyle from '../components/GlobalStyle';
import ServiceWrapper from '../components/ServiceWrapper';

import SouthKoreaMap from '../components/SouthKoreaMap';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ServiceWrapper>
        <SouthKoreaMap />
      </ServiceWrapper>
    </>
  );
};

export default App;
