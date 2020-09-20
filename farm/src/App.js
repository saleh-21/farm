import React, { useState } from 'react';
import Add from '../src/components/Add/Add';
import Edit from '../src/components/Edit/Edit'
import './App.css';



function App() {

  return (
    <div className="App">
      <div className="App-header">

        <div className="addComp">
          <Add></Add>
        </div>

        <div className="editComp">
          <Edit></Edit>
        </div>
      </div>

    </div>
  );
}

export default App;
