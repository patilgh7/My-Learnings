import React from "react";

import UserContext from "./UserContext";



const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);

    return(
        <UserContext.Provider value={{user, setUser}}>
        
        {children}   
        </UserContext.Provider>
    )

}

export default UserContextProvider


/*
    // For passing data
    const [user, setUser] = React.useState(null);

    //  <UserContext.Provider> using we wrapped but we need to mention which value should access for that
        we use value property ....value can be object also 
         <UserContext.Provider value={{user, setUser}}>

    Render a children as it is...here you can render anything <Login /> <Card /> 
    children is generic name like div for passing props ahead as it is 

    <UserContext.Provider value={{user, setUser}}>
        
        {children}   
    </UserContext.Provider>



*/