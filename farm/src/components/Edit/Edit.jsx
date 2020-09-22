import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'


import "./Edit.css"

function Edit(props) {

    const [showEdit, setShowEdit] = useState(false)
    const [item, setItem] = useState({})
    
    const [pregCheck, setPregCheck] = useState(false);
    const [aliveCheck, setAliveCheck] = useState(true);

    const idRef = useRef("")

    let pregnant="";
    let alive ="";

    function handleSubmit(e) {

        e.preventDefault();

        const Id = e.target.Id.value
        const Mother = e.target.Mother.value
        const Father = e.target.Father.value
        const DateOfBirth = e.target.DateOfBirth.value
        const Gender = e.target.Gender.value
        
        const IsPregnant = e.target.IsPregnant.checked
        const IsAlive = e.target.IsAlive.checked



        fetch('/edit', {
            method: "POST",
            body: JSON.stringify({ Id, Mother, Father, DateOfBirth, Gender, IsPregnant, IsAlive }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                setShowEdit(false)
                idRef.current.value = ""
                alert("UPDATED SUCCESSFULLY")

            })
    }

    function handleShowEdit(e) {
        e.preventDefault();
        const Id = e.target.Id.value
        console.log(Id)
        fetch('/getItemToEdit', {
            method: "POST",
            body: JSON.stringify({ Id }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.length > 0) {
                    setItem(data[0])
                    console.log(data[0])
                    data[0].isPregnant ? setPregCheck(true) : setPregCheck(false)
                    data[0].isAlive ? setAliveCheck(true) : setAliveCheck(false)
                    setShowEdit(true)


                }
                else {
                    console.log("NOT FOUND")
                    alert("THIS ID WAS NOT FOUND")
                }
            })

    }
    return (
        <div>

            <h1>EDIT</h1>
            {showEdit ?
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            ID: <input type="number" name="Id" value={item.ID} /> <br></br>
                            Mother: <input type="number" name="Mother" defaultValue={item.mother} /><br></br>
                            Father: <input type="number" name="Father" defaultValue={item.father} /><br></br>
                            Date Of Birth: <input type="date" name="DateOfBirth" defaultValue={item.dateOfBirth} /><br></br>

                            Gender:
                            <select className="genderSelect" name="Gender">
                                <option selected value=" "></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select><br></br>

                            Pregnant: <input name="IsPregnant" type="checkbox" checked={pregCheck} onChange={() => { setPregCheck(!pregCheck) }}/><br></br>
                            Alive: <input name="IsAlive" type="checkbox" checked={aliveCheck} onChange={() => { setAliveCheck(!aliveCheck) }}/><br></br>

                            <input type="submit" value="Submit" />
                        </label>
                    </form >
                </div >
                :
                <div>
                    <form onSubmit={handleShowEdit}>
                        <label>
                            ID: <input type="number" name="Id" ref={idRef} /> <br></br>
                            <input type="submit" value="Edit" />
                        </label>

                    </form >
                </div>
            }



        </div >
    )


}

export default Edit;