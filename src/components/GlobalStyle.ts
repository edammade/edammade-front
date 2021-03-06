import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    &::-webkit-scrollbar {
      display: none;
    }
  }

  *,
  span {
    box-sizing: border-box;
    user-select: none;
    line-height: 1.25;
    font-family: 'Poppins', 'Noto Sans KR', sans-serif;
  }

  img {
    -webkit-user-drag: none;
  }

  button:focus,
  input:focus {
    outline: none;
  }
`;

export default GlobalStyle;
