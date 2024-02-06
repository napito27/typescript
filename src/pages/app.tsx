import React from 'react';

import { Rules, TsBasics, AppBarComponent } from '../molecules';
import { BasicButtonGroup } from '../atoms';


function App() {
  
  return (
    <div className="App">
      <AppBarComponent />
      <Rules rule='Employee Address' contains='contains' values={['San Francisco', 'California', 'Austin']}/>
      <BasicButtonGroup />
    </div>
  );
}

export default App;
