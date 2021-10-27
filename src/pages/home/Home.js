import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Firebaseuse from '../../hooks/Usefirebase';

const Home = () => {
    const [admin,setadmin] = useState([])
    const {user} = Firebaseuse()
    useEffect(()=>{
fetch('https://nameless-tundra-05866.herokuapp.com/user')
.then(res=>res.json())
.then(data => setadmin(data))
},[]) 

const handledelete = (id) =>{
    fetch(`https://nameless-tundra-05866.herokuapp.com/delete/${id}`,{
        method: "DELETE",


    })

    // -----------------
  
    .then(res=>res.json())
.then(data =>{
    const confirm = window.confirm("are you sure????")
    if(confirm){
        const filters = admin.filter( data =>data._id !== id)
        setadmin(filters)
    }
   
})    
    
}
const handleaddevent =(index) =>{
const data = admin[index]
delete data._id

data.email = user?.email 
fetch('https://nameless-tundra-05866.herokuapp.com/addtoevent',{
    method:'POST',
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify(data)
})
        }
    return (
        <div>
            <h1 className="text-center">home</h1>
            <h1 className="text-center">name:{user?.displayName}</h1>
            <h5 className="text-center">email:{user?.email}</h5>
            <Container>
                <div className="row">
                    {
                        admin?.map((ad,index) => <div className="col-md-4 border border-2 border-info g-2 p-2">
                            <h2>{ad.name}</h2>
                            <h5>{ad.price}</h5>
                            <p>{ad.desc}</p>
                            <p>{ad._id}</p>
                          <div className="d-flex justify-content-around">
                          <button className="btn btn-info" onClick={()=>handleaddevent(index)}>add event</button>
                   
                          <Link to={`/event/${ad._id}`}>
                          <button className="btn btn-danger">register</button>
                          </Link>
                          <button onClick={()=>handledelete(ad._id)} className="btn btn-success">delete</button>
                          </div>
                            </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Home;