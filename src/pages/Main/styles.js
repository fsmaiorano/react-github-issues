import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  form {
    padding: 40px;
    input {
        flex: 1;
    height: 55px;
    padding: 0 20px;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
        background-color: #EEE;
    }
    button {
        width: 80px;
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        color: #fff;
        border: 0;
        font-size: 20x;
        font-weight: bold;
        border-radius: 3px;
        background-color: #59EA9A;
        &:hover {
            background: #52d89f;
          }
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
