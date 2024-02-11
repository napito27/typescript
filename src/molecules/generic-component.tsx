import { Card } from "@mui/material";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

interface ListProps<T> {
  items: T[]; 
  renderItem: (item: T) => React.ReactNode;
}

function ItemList<T>({items, renderItem}: ListProps<T>) {

  return (
    <Card 
      style={{padding:'0 1rem', width: '200px', height: '250px', textAlign:'center'}}>
      <h3>Generic Component</h3>
      <List >
        {items.map((item, index) => (
          <ListItem key={index} style={{padding:'2px 16px'}}>
            {renderItem(item)}
          </ListItem> 
        ))}
      </List>
    </Card>
  );
}

export default ItemList;