import React from 'react'

import { Button, Card } from "@mui/material";

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

interface eventHandlerProps {
  title: string;
  light: string;
  dark: string;
}

function HandlingButton({title, light, dark}: eventHandlerProps) {
  const [background, setBackground] = React.useState<boolean>(true);

  const handleClick = () => {
    setBackground(!background);
  }

  const backgroundColor = background? '#e3e3e3' : '#282c34';

  return (
    <Card 
      style={{padding:'0 1rem', width: '200px', maxHeight: '250px', textAlign:'center', background: backgroundColor}}
    >
      <h3>{title}</h3>
      <Button 
        onClick={handleClick}
        variant='contained'
        style={{margin:'2rem'}}
      >
        {background && <LightModeOutlinedIcon />}
        {!background && <DarkModeOutlinedIcon />}
      </Button>
      {background && <p>{light}</p>}
      {!background && <p>{dark}</p>}
    </Card>
  )
}

export default HandlingButton;