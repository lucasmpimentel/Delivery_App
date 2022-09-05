import Styled from 'styled-components';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

export const CardContainer = styled(Card)(
  {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '250px',
    margin: '15px',
    width: '190px',
    padding: 0,
  },
);

export const CardHead = styled(CardHeader)(
  {
    alignItems: 'flex-start',
    height: '100px',
    overflow: 'hidden',
  },
);

export const Image = styled(CardMedia)(
  {
    maxHeight: '75px',
    maxWidth: '75px',
  },
);

export const Content = styled(CardContent)(
  {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '10px',
    overflow: 'hidden',
    padding: 0,
  },
);

export const IconBtn = styled(IconButton)({});

export const Text = styled(TextField)(
  {
    maxWidth: '40px',
    textAlign: 'center',
    padding: 0,
  },
);

export const Div = Styled.div`align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;
