import Styled from 'styled-components';
import { styled } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

export const Div = Styled.div`display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  min-width: 28%;
`;

export const Status = styled(Typography)(
  {
    border: 'solid 2px black',
    borderRadius: '5px',
    marginBottom: '5px',
    padding: '2px',
    textAlign: 'center',
  },
);
