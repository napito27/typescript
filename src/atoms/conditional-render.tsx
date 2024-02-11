//Conditional Rendering and Optional Props: 
//Create a component that optionally accepts a message prop and displays it if present. 
//Use TypeScript to make the prop optional and demonstrate conditional rendering based on its presence.

import { Card, Typography } from '@mui/material';

interface conditionalRenderprops {
  message?: string;
}

function ConditionalRender({message}: conditionalRenderprops) {

  return (
    <Card 
      style={{padding:'0 1rem', width: '200px', maxHeight: '250px', textAlign:'center'}}
    >
      <h3> Conditional Render</h3>
      <Typography>{message}</Typography>
    </Card>
  );
}

export default ConditionalRender;