import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Firebaseuse from '../../hooks/Usefirebase';

const Eventform = () => {
    const [charity,setcharity] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:5000/user/${id}`)
        .then(res =>res.json())
        .then(data =>setcharity(data))
    },[id])

  
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const {user} = Firebaseuse()
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="ms-5 mt-5">
      {/* register your input into the hook by invoking the "register" function */}
      
      
   
      <input defaultValue={user?.displayName} {...register("name", { required: true })} placeholder="your name" /> <br /> <br /> 
      <input defaultValue={user?.email} {...register("email", { required: true })} placeholder="your email" /> <br /> <br />
      <input defaultValue={charity?.name} {...register("charity", { required: true })} placeholder="charity name" /> <br /> <br />
     
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" className="text-white fw-bold bg-danger p-1" value="register" />
    </form>
        </div>
    );
};

export default Eventform;