import React, { useState } from 'react';
import './App.css';
import Add from '../src/components/Add/Add';
import Edit from '../src/components/Edit/Edit'
import MainTable from './components/Table/MainTable';



function App() {

  console.log("AAAAAA")
  return (
    <div className="App">
      <div className="App-header">

        <div className="addComp">
          <Add></Add>
        </div>

        <div className="editComp">
          <Edit></Edit>
        </div>

        <div className="mainTableComp">
          {<MainTable></MainTable>}
        </div>
      </div>

    </div>
  );
}

export default App;
