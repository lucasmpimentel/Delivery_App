import { styled } from '@material-ui/core/styles';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from '@material-ui/core';

export const OrderTable = styled(Table)(
  {
    minWidth: '100%',
  },
);

export const THead = styled(TableHead)(
  {
    backgroundColor: 'black',
  },
);

export const Tdh = styled(TableCell)(
  {
    color: 'white',
  },
);

export const Total = styled(Box)(
  {
    backgroundColor: '#ffbf9b',
    borderRadius: '5px',
    color: '#111',
    fontSize: '16px',
    fontWeight: '500',
    marginTop: '5px',
    textAlign: 'center',
    padding: '15px',
  },
);

export const Div = styled(Box)(
  {
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '100%',
    padding: '0 10px',
  },
);

export const TBody = styled(TableBody)({});
export const Tr = styled(TableRow)({});
export const Td = styled(TableCell)({});
