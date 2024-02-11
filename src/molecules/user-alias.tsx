import React from 'react';

import { Button, Card, List, ListItem } from '@mui/material';

interface UserAliasProps {
  age?: number;
  name?: string;
  eventName: any;
  email?: string;
  displayInfo: () => void;
}

function UserAlias() {
  const [age, setAge] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, age, email);
  };

  return (
    <Card 
      style={{padding:'0 1rem', width: '200px', maxHeight: '250px', textAlign:'center'}}>
      <h3>User Alias</h3>

      <form >
        <label>
          <span>Name:</span>
          <input 
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        <label>
          <span>Age:</span>
          <input
            type='number'
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </label>

        <label>
          <span>email:</span>
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
      </form>
      <Button onClick={handleSubmit}>Send</Button>
      
    </Card>
  );
}

export default UserAlias;