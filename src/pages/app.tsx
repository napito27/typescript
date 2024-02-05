import React from 'react';

import { Rules, TsBasics } from '../molecules';

function App() {
  return (
    <div className="App">
      <Rules rule='Employee Address' contains='contains' values={['San Francisco', 'California', 'Austin']}/>
      <TsBasics />
    </div>
  );
}

export default App;
