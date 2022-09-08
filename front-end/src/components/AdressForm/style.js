import { styled } from '@material-ui/core/styles';
import { NativeSelect, InputLabel, FormControl } from '@material-ui/core';

export const Form = styled(FormControl)(
  {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    minHeight: '300px',
    minWidth: '100%',
  },
);
export const Seller = styled(NativeSelect)(
  {
    minWidth: '100%',
  },
);

export const Label = styled(InputLabel)(
  {
    overflow: 'hidden',
  },
);
