import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


import "./Add.css"

function Add(props) {

    const [pregCheck, setPregCheck] = useState(false);
    const [aliveCheck, setAliveCheck] = useState(true);
    const {UIData,setUIData} = props




    function handleSubmit(e) {

        e.preventDefault();
        const Id = e.target.Id.value
        const Mother = e.target.Mother.value
        const Father = e.target.Father.value
        const DateOfBirth = e.target.DateOfBirth.value
        const G = e.target.Gender
        const Gender = G.options[G.selectedIndex].value
        const IsPregnant = e.target.IsPregnant.checked
        const IsAlive = e.target.IsAlive.checked
        console.log(Id)
        if(Id != ""){
        fetch('/add', {
            method: "POST",
            body: JSON.stringify({ Id, Mother, Father, DateOfBirth, Gender, IsPregnant, IsAlive }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert("ADDED SUCCESSFULLY")
                    updateUIData()
                } else {
                    alert("ID ALREADY IN USE")
                }
            })
        }else{
            alert("ID CAN NOT BE EMPTY")
        }

    }



    function updateUIData(){
        fetch('/getAllData', {
            method: "POST",
            body: JSON.stringify({}),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(res => res.json())
            .then(data => {
              setUIData(data)
              console.log("EDIT EDIT EDIT EDIT EDIT EDIT EDIT EDIT EDIT EDIT ")
            })
    }


    const today = new Date().toISOString().substr(0, 10);;
    return (
        <div className>
            <h1>ADD</h1>
                <form onSubmit={handleSubmit}>
                    ID:  <input type="number" name="Id" /> <br></br>
                    Mother: <input type="number" name="Mother" /><br></br>
                    Father: <input type="number" name="Father" /><br></br>
                    Date Of Birth: <input type="date" name="DateOfBirth" defaultValue={today} /><br></br>
                    Gender:
                    <select className="genderSelect" name="Gender">
                        <option selected value=" "></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select><br></br>

                    Pregnant: <input name="IsPregnant" type="checkbox" checked={pregCheck} onChange={() => { setPregCheck(!pregCheck) }} /><br></br>

                    Alive: <input name="IsAlive" type="checkbox" checked={aliveCheck} onChange={() => { setAliveCheck(!aliveCheck) }} /><br></br>

                    <input type="submit" value="Submit" className="button" />
                </form>

        </div>
    )


}

export default Add;