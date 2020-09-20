import React, { useState } from 'react';
import Add from '../src/components/Add/Add';
import Edit from '../src/components/Edit/Edit'
import './App.css';










function App() {

  const [data, setData] = useState([]);
  const editData = [
    { Id: "14", Mother: "25", Father: "542", DateOfBirth: "2020-09-02", Gender: "male" },
    { Id: "15", Mother: "25", Father: "542", DateOfBirth: "2020-09-07", Gender: "male" },
    { Id: "16", Mother: "25", Father: "542", DateOfBirth: "2020-09-09", Gender: "ii" },
    { Id: "18", Mother: "25", Father: "542", DateOfBirth: "2020-09-16", Gender: "ii" },
    { Id: "19", Mother: "25", Father: "542", DateOfBirth: "2020-09-18", Gender: "ii" }
  ];




  return (
    <div className="App">
      <div className="App-header">

        <div className="addComp">
          <Add data={data} setData={setData}></Add>
        </div>

        <div className="editComp">
          {/* <Edit data={data} setData={setData} editData = {editData}></Edit> */}
        </div>
      </div>

    </div>
  );
}

export default App;
