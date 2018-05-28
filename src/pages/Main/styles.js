import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  form {
    padding: 40px;
    input {
        height: 60px;
        padding: 0px 18px;
    }
    button {
        margin: 5px;
        width: 59px;
        height: 59px;
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
