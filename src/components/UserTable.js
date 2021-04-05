import React, { useState, useEffect } from 'react'
import  Table  from 'react-bootstrap/Table'
import API from '../utils/API'
import Users from './Users'


function UserTable() {
    const [userState, setUserState] = useState([])
    useEffect(() => {
        userTable()
    }, [])

    const userTable = () => {
        API.getRandomUsers().then((results) => {
            setUserState(results.data.results)
          })
    }



    return (
        <Table>
            <thead>
                <tr>
                    <th>Picture:</th>
                    <th>Name:</th>
                    <th>Email:</th>
                    <th>Phone:</th>
                    <th>Location:</th>
                </tr>
            </thead>
            <tbody>
                {userState.map((user) => (
                <Users 
                userProfile= {user.image}
                userName= {(`${user.name.first} ${user.name.last}`)}
                userEmail= {user.email}
                userPhone= {user.phone}
                userLocation= {user.location.country}
                 />
                ))} 
            </tbody>
        </Table>
    )
}


export default UserTable
