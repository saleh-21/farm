import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


import "./Add.css"

function Add(props) {

    // let { data, setData } = props
    // const [newData, setNewData] = useState({});

    // useEffect(() => {
    //     console.log(newData)
    //     setData([...data, newData])
    //     console.log(data)
    // }, [newData])


    function handleSubmit(e) {

        e.preventDefault();

        const Id = e.target.Id.value
        const Mother = e.target.Mother.value
        const Father = e.target.Father.value
        const DateOfBirth = e.target.DateOfBirth.value
        const Gender = e.target.Gender.value
        fetch('/add', {
            method: "POST",
            body: JSON.stringify({ Id, Mother, Father, DateOfBirth, Gender }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(data => console.log(data))

    }
    const today = new Date().toISOString().substr(0,10);;
    return (
        <div>
            <h1>ADD</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    ID: <input type="number" name="Id" /> <br></br>
                    Mother: <input type="number" name="Mother" /><br></br>
                    Father: <input type="number" name="Father" /><br></br>
                    Date Of Birth: <input type="date" name="DateOfBirth" defaultValue={today}/><br></br>
                    Gender: <input type="text" name="Gender" /><br></br>
                    <input type="submit" value="Submit" />
                </label>
            </form>




        </div>
    )


}

export default Add;