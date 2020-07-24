import styled from 'styled-components';

import logoImage from '../assets/logo.png';

const BrandLogo = styled.img.attrs({
  src: logoImage,
})`
  height: 50px;
  filter: saturate(120%);
`;

export default BrandLogo;
