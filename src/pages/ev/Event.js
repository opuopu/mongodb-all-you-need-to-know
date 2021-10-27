import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Useauth from '../../context/useauth';

const Event = () => {
    const {user} = Useauth()
    const[items,setitem] = useState([])
const email = user?.email
console.log(email);
    // const [item,setitem] = ({})
 useEffect(()=>{
    fetch( `https://nameless-tundra-05866.herokuapp.com/eventitem/${email}`)
    .then(res =>res.json())
    .then(data =>setitem(data))
 },[email])
    return (
        <div>
            <h1 className="text-center">your events{items.length}</h1>

            <div className="row">
                {
                   items.map(item =>
                    <div className="col-md-4">
                    <h1>{item?.name}</h1>
                        <h5>{item?.price}</h5>
                        <p>{item?.desc}</p>
                     <Link to="/home">
                     <button className="btn btn-danger">back to home</button>
                     </Link>
                    </div>
                   )
                }
            </div>
    
            
        </div>
    );
};

export default Event;