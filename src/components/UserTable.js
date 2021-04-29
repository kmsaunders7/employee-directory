import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import API from '../utils/API'



function UserTable() {
    const [randomUsers, setRandomUsers] = useState([])
    
    
    useEffect(() => {
        userTable()
    }, [])

    const userTable = () => {
        API.getRandomUsers().then((results) => {
            setRandomUsers(results.data.results)
            console.log(setRandomUsers)
        })
    }



    return (
        <Table>
            <thead>
                <tr>
                    <th scope='col'>Picture:</th>
                    <th scope='col'>Name:</th>
                    <th scope='col'>Email:</th>
                    <th scope='col'>Phone:</th>
                    <th scope='col'>Location:</th>
                </tr>
            </thead>
            <tbody>
                {randomUsers.map((user) => (
                    <tr key={user.id.value}>
                        <td>
                           <img src={user.picture.large}/>
                        </td>
                        <td>
                        {(`${user.name.first} ${user.name.last}`)}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.location.country}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}


export default UserTable
