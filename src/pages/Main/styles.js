import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0px;
  display: flex;
  box-sizing: border-box;
`;

export const Left = styled.div`
  flex-shrink: 0;
  padding: 30px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Right = styled.div`
  flex-shrink: 0;
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1086px) {
    width: 63%;
  }
`;

export const TopLeft = styled.div`
  flex-shink: 0;
  background-color: #FFF;

    form {

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

export const TopRight = styled.div`
  flex-shrink: 0;
  display: inline-flex;
  height: 100px;
  padding: 30px;
  background-color: #e6e5e5;

  select {
    border: 0;
    padding: 15px;
    height: 53px;
    font-size: 20px;
    color: gray;
    position: absolute;
    right: 53px;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;

  .loading {
    font-size: 80px;
    margin-top: 50px;
  }
`;
