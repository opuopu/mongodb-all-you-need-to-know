import React from 'react';
import { Redirect, Route } from 'react-router';
import Useauth from '../../context/useauth';
import Firebaseuse from '../../hooks/Usefirebase';

const Privateroute = ({children,...rest}) => {
    const {user} = Useauth()
    console.log(user.email);
    return (
        <Route
      
        {...rest}
        render={({ location }) =>
         user?.email ? (
               children
             ) : (
               <Redirect
                 to={{
                   pathname: "/login",
                   state: { from: location }
                 }}
               />
             )
           }
        >
        
        </Route>
    );
};

export default Privateroute;