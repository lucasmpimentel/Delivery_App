import Styled from 'styled-components';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const NavBar = styled(AppBar)(
  {
    backgroundColor: '#ff7f35',
    alignItems: 'center',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    height: '55px',
    minWidth: '100vw',
    position: 'sticky',
    textDecoration: 'none',
    padding: '10px',
    overflow: 'hidden',
  },
);

export const ToolBar = styled(Toolbar)(
  {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
    minWidth: '100%',
    padding: 0,
  },
);

export const NavButton = styled(Button)(
  {
    color: 'white',
  },
);

export const Typo = styled(Typography)(
  {
    textTransform: 'none',
  },
);

export const Div = Styled.div`align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 35vw;
  min-width: 15vw;
`;
