import React from 'react'

const Users = (props) => {
    return (
        <tbody>
            <tr >
                <td> 
                    <img src={props.userImage} alt="image of user" />
                </td>
                <td>
                    {props.userName}
                </td>
                <td>
                    {props.userEmail}
                </td>
                <td>
                    {props.userPhone}
                </td>
                <td>
                    {props.userLocation}
                </td>

                </tr>
          
        </tbody>
    )
}

export default Users
