import React from 'react';
import styled from 'styled-components';

import BrandLogo from './BrandLogo';

const ServiceWrapper: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <BrandLogo />
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default ServiceWrapper;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Container = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-top: 25px;

  @media all and (max-width: 1000px) {
    width: 85%;
  }
`;

const ContentWrapper = styled.div`
  padding-top: 25px;
  display: flex;
`;
