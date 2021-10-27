import { createContext } from "react";
import React from 'react';
import Firebaseuse from "../hooks/Usefirebase";

 export const authcontext = createContext()



const Authprovider = ({children}) => {
    const firebase = Firebaseuse()
    return (
     <authcontext.Provider value ={firebase}>
{children}
     </authcontext.Provider>
    );
};

export default Authprovider;