/* eslint-disable react/prop-types */
import { Children, createContext, useState } from "react";


export const AuthContext = createContext();

const AuthProvider = ({children}) =>{

    const [user,setUser] = useState("Arya");

    const authInfo ={
        user
    }
    return(
       <AuthContext.Provider value={authInfo}>
        {Children}
       </AuthContext.Provider>
    )
}

export default AuthProvider;