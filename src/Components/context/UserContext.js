import { React, createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({children})=>{
    const [token,setToken] = useState(() => {
        const storedToken = localStorage.getItem("token");
        return storedToken !== null ? storedToken:null;
    });

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);
    


    return (
        <UserContext.Provider value={{token, setToken}}>
            {children}
        </UserContext.Provider>
    );
}
