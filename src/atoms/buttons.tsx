import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function BasicButtonGroup() {

  return (
    <Box
      style={{margin: 'auto', width: 'fit-content'}}
    >
      <ButtonGroup variant="contained" disableElevation>
        <Button>Home</Button>
        <Button variant='outlined' style={{margin: '0 1rem'}}>Dashboard</Button>
        <Button color='error'>Settings</Button>
      </ButtonGroup>
    </Box>
  );
}

export default BasicButtonGroup;