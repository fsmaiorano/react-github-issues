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
    }
    button {
        margin: 5px;
        width: 49px;
        height: 49px;
        min-width: 40px;
        min-height: 40px;
    }
    }
  }
`;

export const LeftContent = styled.div`
  flex: 1;
  height: 100vh;
  border-right: 1px solid black;
`;

export const RightContent = styled.div`
  flex: 3;
`;
