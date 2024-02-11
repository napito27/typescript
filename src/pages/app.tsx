import { 
  AppBarComponent, 
  Counter, 
  ReadOnly, 
  Rules, 
  TsBasics, 
  TupleComponent,
  UserAlias, 
  UserProfile, 
} from '../molecules';

import { 
  BasicButtonGroup, 
  ConditionalRender, 
  HandlingButton 
} from '../atoms';

import {useCounter} from '../hooks';

import {Box} from '@mui/material';

import ItemList from '../molecules/generic-component';

function App() {
  const {count, increment, decrement, reset} = useCounter(0);

  const tsBasics = [
    'Static typing', 
    'Interfaces', 
    'Types',
    'Duck typing',
    'IntelliSense'
  ];
  
  const list = [
    "one",
    1,
    "two",
    2,
    "three",
    3
  ];

  const countries = [
    'Colombia',
    'Honduras',
    'Mexico',
    'USA'
  ]

  return (
    <div className="App">
      <AppBarComponent title='AppBar' bgColor='primary' newEmails={5} notifications={5} badgeColor='warning'/>
      <Rules rule='Employee Address' contains='contains' values={['San Francisco', 'California', 'Austin']}/>
      <BasicButtonGroup />
      <Box style={{display: 'flex', gap: '1rem', marginTop:'2rem', justifyContent:'center'}}>
        <TsBasics basics={tsBasics}/>
        <UserProfile name='John Doe' age={27} hobbies={['Coding', 'Driving', 'Reading']}/>
        <Counter count={count} increment={increment} decrement={decrement} reset={reset}/>
        <HandlingButton title='Event Handling Button' light='Light Background' dark='Dark Background'/>
        <ConditionalRender message='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, adipisci!'/>
      </Box> 
      <Box style={{display: 'flex', gap: '1rem', margin:'2rem 0', justifyContent:'center'}}>
        <ItemList items={list} renderItem={(item) => <>{item}</>}/>
        <ReadOnly countries={countries}/>
        <UserAlias />
        <TupleComponent />
      </Box>
    </div>
  );
}

export default App;
