import styled from 'styled-components';

export const Main = styled.main`align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  min-width: 100vw;
`;

export const Logo = styled.img`margin: auto 0;
  max-width: 90vw;
  opacity: 50%;
`;
