import React from 'react';

import { Button, Card, List } from '@mui/material';

const TupleComponent: React.FC = () => {
  const [state, setState] = React.useState<[boolean, string]>([false, '']);

  const handleClick = () => {
    setState([true, 'Clicked!']);
  };

  const myTuple: [boolean, string] = [false, 'Hello'];

    // asserting it to a different tuple type
  const assertingTuple: [boolean, string] = myTuple as unknown as [boolean, string];
  console.log(typeof(assertingTuple[0]));

  return (
    <Card style={{padding:'0 1rem', width: '200px', maxHeight: '250px', textAlign:'center'}}>
      <h3>Tuple and Type Assertion</h3>
      <div>
        <p>State: {state[0] ? state[1] : 'Not Clicked'}</p>
      </div>
      <Button onClick={handleClick}>Click</Button>
      <p>Explicit Assertion: {assertingTuple[0]}, {assertingTuple[1]}</p>
    </Card>
  );
};

export default TupleComponent;