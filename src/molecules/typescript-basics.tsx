import { Card, Divider, Typography } from '@mui/material';
interface TsBasicsProps {
  basics: string[]
};

function TsBasics({basics}: TsBasicsProps) {

  return (
    <Card sx={{paddingLeft:'1rem', width: '200px', height: '250px'}}>
      <h3>TypeScript Basics</h3>
      <Divider />
      {
        basics.map((item, index) => (
          <Typography key={index} variant="body2" color="text.secondary">
            {item}
          </Typography>
        ))
      }
    </Card>
  );
};

export default TsBasics;