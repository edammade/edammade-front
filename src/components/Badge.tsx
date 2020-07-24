import React from 'react';
import styled from 'styled-components';

interface IBadge {
  className?: string;
  children: React.ReactNode;
}

const Badge: React.FC<IBadge> = ({ className, children }) => {
  return (
    <BadgeContainer
      className={className}
    >
      <span role="img" aria-labelledby="flower-emoji">🌸</span>
      {children}
    </BadgeContainer>
  );
};

export default Badge;

const BadgeContainer = styled.div`
  padding: 12px 20px;
  padding-bottom: 9px;
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-weight: bold;
  font-size: 19px;
`;
