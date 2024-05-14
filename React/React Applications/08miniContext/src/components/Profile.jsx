import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    //  const {user} this variable we are taking from UserContextProvider.jsx file
    const {user} = useContext(UserContext)

    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile


/*

    For Data receive that means data get

    const {user} = useContext(UserContext)



*/