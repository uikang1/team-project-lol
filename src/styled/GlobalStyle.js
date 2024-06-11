import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  
  body {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.6;
    font-family: 'Pretendard-Regular';
    /* font-family: 'Noto Sans KR', sans-serif; */
    color:#333;
  }
  a {
    text-decoration: none;
    color:#333; 
  }
  li { list-style:none }
  img { vertical-align: top; }
  button {border-color:transparent}
  .inner{
    width: 1600px;
    margin: auto;
  }
  .block {
        height: 80px;
        background-color: rgb(22, 31, 50);
    }

  .inner2 { width: 1200px;
        margin: auto;
        position: relative; }
        .block {
        height: 80px;
        background-color: rgb(22, 31, 50);
  }

`;
export default GlobalStyle;
