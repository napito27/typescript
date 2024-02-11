import { Box, Button, Card } from "@mui/material";

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';

type counterProps = {
  count: number;
  increment: () => void;
  decrement: () => void; 
  reset: () => void; 
}

function Counter({count, increment, decrement, reset}: counterProps) {

  return (
    <Card style={{padding:'0 1rem', width: '200px', maxHeight: '250px', textAlign:'center'}}>
      <h3>Counter</h3>
      <h2>{count}</h2>
      <Box style={{display:'flex', gap:'1rem', justifyContent:'center', marginBottom:'1rem'}}>
        <Button variant="contained" onClick={increment}>
          <AddCircleOutlineOutlinedIcon />
        </Button>
        <Button variant="contained" onClick={decrement}>
        <RemoveCircleOutlineOutlinedIcon />
        </Button>
      </Box>
      <Button variant="outlined" onClick={reset}>
        <RestartAltOutlinedIcon />
      </Button>
    </Card>
  )
}

export default Counter;