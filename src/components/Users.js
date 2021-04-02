import React from 'react'

const Users = (props) => {
    return (
        <tbody>
            {props.map((user) => {
                <tr key={user.id.value}>
                <td> 
                    <img src={user.picture.thumbnail} alt="employee picture" />
                </td>
                <td>
                    {(`${user.name.first} ${user.name.last}`)}
                </td>
                <td>
                    {user.email}
                </td>
                <td>
                    {user.phone}
                </td>
                <td>
                    {user.location.country}
                </td>

                </tr>
            })}
        </tbody>
    )
}

export default Users
