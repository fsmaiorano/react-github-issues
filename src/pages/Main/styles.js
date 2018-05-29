import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  form {
    padding: 40px;
    input {
        height: 50px;
        font-size: 14px;
        padding: 0px 18px;
        min-height: 40px;
        background-color: #EEE;
    }
    button {
        margin: 5px;
        width: 49px;
        height: 49px;
        min-width: 40px;
        min-height: 40px;
        background-color: #59EA9A;
    }
    }
  }
`;

export const LeftContent = styled.div`
  height: 100vh;
  border-right: 1px solid black;
  background-color: #fff;
`;

export const RightContent = styled.div``;
