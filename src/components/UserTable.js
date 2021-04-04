import React from 'react'
import  Table  from 'react-bootstrap/Table'
import Users from './Users'

const UserTable = (props) => {
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
                <Users users= {props.users} />
            </tbody>
        </Table>
    )
}

export default UserTable
