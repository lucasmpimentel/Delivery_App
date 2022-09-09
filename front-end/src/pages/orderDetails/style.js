import Styled from 'styled-components';
import { styled } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

export const Title = styled(Typography)(
  {
    marginTop: '40px',
    marginLeft: '20px',
  },
);

export const Main = Styled.main`align-items: flex-start;
  display: 'flex';
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  min-width: 100vw;
`;

export const Section = Styled.section`align-items: flex-start;
  display: flex;
  justify-content: space-between;
  min-height: 100%;
  min-width: 100%;
  padding: 20px;
`;

export const Div = Styled.div`align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 70%;
`;
