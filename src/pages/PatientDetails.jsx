import React,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom";

const PatientDetails = () => {
    const [exerciseList, setExerciseList] = useState([]);
    const {id} = useParams();
    const getInitialState = () => {
        const value = ''
        return value;
    };

    const [value, setValue] = useState(getInitialState);

    useEffect(() => {
        loadPatients(id);
    }, []);

    const loadPatients = (id) => {
        fetch(`http://localhost:8000/api/patients/exercises/list/`+id)
            .then((response) => {
                return response.json()
            }).then((data) => {
            setExerciseList(data);
        });
    }



    const handleChange = (e) => {
        let name = e.target.value
        const uri = '../asset/data/'+name+'.csv'
        setValue(e.target.value);

        let link = document.createElement("a");
        link.download = name;
        link.href = uri;
        link.click();
    }

  return (

    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Patient exercise information</h1>
        <table>
            <tbody>
            <tr>
                <td>User Exercise data: </td>
                <td>
                    <select id="dropdown" value={value} onChange={handleChange} >
                           {exerciseList?.map((exerciseData,index)=>{
                               return(
                                   <option key={index} value={exerciseData.name}>{exerciseData.name}</option>
                                   )

                        })}
                    </select>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default PatientDetails