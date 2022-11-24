import React,{useEffect, useState} from 'react'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import PatientDetails from "./PatientDetails";

const Patient = () => {
    const [patientList, setPatientList] = useState([]);

    useEffect(() => {
        loadPatients();
    }, []);

    const loadPatients = () => {
        fetch(`http://localhost:8000/api/medicines`)
            .then((response) => {
                return response.json()
            }).then((data) => {
            console.log(data)
            setPatientList(data.data);
        });
    }

  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Patient information</h1>
        <table>
            <thead>
            <tr>
                <th>Username</th>
                <th>E-mail</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {patientList?.map((patient,index) => {
             return (

                    <tr key={index}>
                        <td>{patient.username}</td>
                        <td>{patient.email}</td>
                        <td><Link to={`${patient.userID}`}>View</Link></td>
                    </tr>

             )
            })}
            </tbody>
        </table>
    </div>

  )
}

export default Patient