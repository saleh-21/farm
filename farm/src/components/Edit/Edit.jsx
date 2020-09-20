import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


import "./Edit.css"

function Edit(props) {

    let { data, setData, editData } = props
    const [newData, setNewData] = useState({});
    const [showEdit, setShowEdit] = useState(false)
    const [item, setItem] = useState({})

    useEffect(() => {
        console.log(newData)
        setData([...data, newData])
        console.log(data)
    }, [newData])


    function handleSubmit(e) {

        e.preventDefault();

        const Id = e.target.Id.value
        const Mother = e.target.Mother.value
        const Father = e.target.Father.value
        const DateOfBirth = e.target.DateOfBirth.value
        const Gender = e.target.Gender.value

        editData.map(item => {
            if(item.Id == Id){
                item.Mother = Mother;
                item.Father = Father;
                item.DateOfBirth = DateOfBirth;
                item.Gender = Gender;
            }
        })
        

        setShowEdit(false)
    }

    function handleEdit(e) {
        e.preventDefault();
        editData.map(item => {
            console.log(item.Id)
            if (item.Id == e.target.Id.value) {
                setShowEdit(true)
                setItem(item)
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
                            ID: <input type="number" name="Id" Value={item.Id} /> <br></br>
                            Mother: <input type="number" name="Mother" defaultValue={item.Mother} /><br></br>
                            Father: <input type="number" name="Father" defaultValue={item.Father}  /><br></br>
                            Date Of Birth: <input type="date" name="DateOfBirth" defaultValue={item.DateOfBirth} /><br></br>
                            Gender: <input type="text" name="Gender" defaultValue={item.Gender} /><br></br>
                            <input type="submit" value="Submit" />
                        </label>

                    </form >
                </div >
                :
                <div>
                    <form onSubmit={handleEdit}>
                        <label>
                            ID: <input type="number" name="Id" /> <br></br>
                            <input type="submit" value="Edit" />
                        </label>

                    </form >
                </div>
            }



        </div >
    )


}

export default Edit;