import { Card, List, ListItem } from '@mui/material';

interface readonlyProps {
  countries: readonly string[];
}

function ReadOnly({countries}: readonlyProps) {

  return (
    <Card 
      style={{padding:'0 1rem', width: '200px', maxHeight: '250px', textAlign:'center'}}>
      <h3>Read Only</h3>
      <List >
        {countries.map((country, index) => (
          <ListItem key={index}>
            {index + 1}.- {country}
          </ListItem> 
        ))}
      </List>
    </Card>
  );
}

export default ReadOnly;