import Styled from 'styled-components';
import { styled } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';

export const CheckoutTable = styled(Table)(
  {
    borderRadius: '5px',
    maxHeight: '95%',
    maxWidth: '100%',
    padding: '20px',
  },
);

export const THead = styled(TableHead)(
  {
    borderRadius: '5px',
    backgroundColor: '#2a2a2a',
  },
);

export const TBody = styled(TableBody)(
  {
    width: 'auto',
  },
);

export const Td = styled(TableCell)(
  {
    textAlign: 'center',
  },
);

export const Th = styled(TableCell)(
  {
    color: 'white',
    fontSize: '16px',
    textAlign: 'center',
  },
);

export const Total = styled(Box)(
  {
    backgroundColor: '#ffbf9b',
    borderRadius: '5px',
    color: '#111',
    fontSize: '16px',
    fontWeight: '500',
    textAlign: 'center',
    padding: '15px',
  },
);

export const Tr = styled(TableRow)(
  {
    borderRadius: '5px',
  },
);

export const Div = Styled.div`align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: '60%';
`;
