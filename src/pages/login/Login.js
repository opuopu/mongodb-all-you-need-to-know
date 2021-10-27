import React from 'react';
import Useauth from '../../context/useauth';
import Firebaseuse from '../../hooks/Usefirebase';

const Login = () => {
    const {Goolgesign} = Useauth()
    return (
        <div>
<h1>this is login</h1>
<button onClick={Goolgesign}>google login</button>
        </div>
    );
};

export default Login;