import React, { useState, useEffect } from 'react';
import './App.css';
import Add from '../src/components/Add/Add';
import Edit from '../src/components/Edit/Edit'
import MainTable from './components/Table/MainTable';



import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';




function App() {

	const [UIData, setUIData] = useState([])


	return (
		<div className="App">
			<div className="App-header">

				<div className="buttons">
					<div className="popup">
						<Popup trigger={<button className="popupButton"> ADD </button>} position="bottom right">
							<div className="addComp">
								<Add UIData={UIData} setUIData={setUIData}></Add>
							</div>
						</Popup>
					</div>
					<div className="popup">
						<Popup trigger={<button className="popupButton"> EDIT </button>} position="bottom left">
							<div className="editComp">
								<Edit UIData={UIData} setUIData={setUIData}></Edit>
							</div>
						</Popup>
					</div>
				</div>


				{/* <div className="addComp">
					<Add UIData={UIData} setUIData={setUIData}></Add>
				</div>

				<div className="editComp">
					<Edit UIData={UIData} setUIData={setUIData}></Edit>
				</div>

				<div className="mainTableComp">
					<MainTable UIData={UIData} setUIData={setUIData} mainTitle="ALL THE DATA"></MainTable>
				</div> */}


			</div>

		</div>
	);
}

export default App;
