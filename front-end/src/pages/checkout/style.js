import Styled from 'styled-components';
import { styled } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

export const Main = Styled.main`align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const TSection = Styled.section`display: flex;
  justify-content: space-around;
  margin-top: 30px;
  min-height: 75vh;
  min-width: 100vw;
`;

export const P = styled(Typography)(
  {
    fontSize: '1.8em',
    marginBottom: '30px',
    marginTop: '10px',
    maxWidth: '35vw',
  },
);
