import React, { useState, useEffect } from 'react';
import './App.css';
import Add from '../src/components/Add/Add';
import Edit from '../src/components/Edit/Edit'
import MainTable from './components/Table/MainTable';



function App() {

	const [UIData, setUIData] = useState([])


	return (
		<div className="App">
			<div className="App-header">

				<div className="addComp">
					<Add UIData={UIData} setUIData={setUIData}></Add>
				</div>

				<div className="editComp">
					<Edit UIData={UIData} setUIData={setUIData}></Edit>
				</div>

				<div className="mainTableComp">
					<MainTable UIData={UIData} setUIData={setUIData} mainTitle="ALL THE DATA"></MainTable>
				</div>
			</div>

		</div>
	);
}

export default App;
