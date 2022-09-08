import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const Btn = styled(Button)(
  {
    backgroundColor: '#ff9f68',
    marginBottom: '10px',
    width: '98%',

    '&:hover': {
      backgroundColor: '#ff7f35',
      transform: 'easy',
    },
  },
);

export default Btn;
