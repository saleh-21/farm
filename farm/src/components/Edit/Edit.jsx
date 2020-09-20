import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


import "./Edit.css"

function Edit(props) {

    const [showEdit, setShowEdit] = useState(false)
    const [item, setItem] = useState({})

    function handleSubmit(e) {

        e.preventDefault();

        const Id = e.target.Id.value
        const Mother = e.target.Mother.value
        const Father = e.target.Father.value
        const DateOfBirth = e.target.DateOfBirth.value
        const Gender = e.target.Gender.value

        fetch('/edit', {
            method: "POST",
            body: JSON.stringify({ Id, Mother, Father, DateOfBirth, Gender }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(data => { 
                console.log(data)
                setShowEdit(false)
            })
    }

    function handleEdit(e) {
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
                if(data.length > 0){
                    setItem(data[0])
                    console.log(data[0])
                    setShowEdit(true)
                }
                else{
                    console.log("NOT FOUND")
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
                            Gender: <input type="text" name="Gender" defaultValue={item.gender} /><br></br>
                            <input type="submit" value="Submit"/>
                        </label>
                    </form >
                </div >
                :
                <div>
                    <form onSubmit={handleEdit}>
                        <label>
                            ID: <input type="number" name="Id"/> <br></br>
                            <input type="submit" value="Edit" />
                        </label>

                    </form >
                </div>
            }



        </div >
    )


}

export default Edit;