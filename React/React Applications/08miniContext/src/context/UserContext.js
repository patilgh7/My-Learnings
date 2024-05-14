import React from 'react'

const UserContext =  React.createContext();


export default UserContext;


/*

Suppose we have Login component and Card component when these components wrap with UserContext like below
it becomes Provider...Provider means whichever components comes under UserContext will get access of global 
UserContext...Context is simply Global variable so in our case UserContext is Global variable

With UserContext we also need its Provider so we have created UserContextProvider.jsx file

below code we have used in App.jsx file

<UserContextProvider>

    <Login />
    <Card >
        <DashBorad></DashBorad>
    </Card>


</UserContextProvider>

*/