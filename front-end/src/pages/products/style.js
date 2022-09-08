import Styled from 'styled-components';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const Section = Styled.section`align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Btn = styled(Button)(
  {
    backgroundColor: '#ff9f68',
    bottom: 0,
    margin: '10px',
    position: 'fixed',
    right: 0,

    '&:hover': {
      backgroundColor: '#ff7f35',
    },
  },
);
