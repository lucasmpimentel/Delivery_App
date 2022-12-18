import Styled from 'styled-components';

export const Main = Styled.main`align-items: center;
  background-color: white;
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 100vh;
`;

export const Content = Styled.main`align-items: center;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 100vh;
`;

export const Form = Styled.form`align-items: center;
  background-color: #00000025;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 430px;
  padding: 40px;
`;

export const ArrowBack = Styled.div`align-items: center;
  background-color: transparent;
  border: none;
  border-style: none;
  box-shadow: none;
  display: flex;
  height: 40px;
  justify-content: center;
  position: absolute;
  width: 40px;
`;

export const Label = Styled.form`align-items: center;
  display: flex;
  font-family: sans-serif;
  font-size: 8px;
`;

export const Img = Styled.img`max-width: 50%;
`;

export const Logo = Styled.img`max-width: 200px;
`;
