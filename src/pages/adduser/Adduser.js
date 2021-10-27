import React from 'react';
import { useForm } from 'react-hook-form';

const Adduser = () => {
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://nameless-tundra-05866.herokuapp.com/adduser',{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data =>{
            reset()
        })
    };
    return (
        <div>
             <form className="ms-5 mt-5" onSubmit={handleSubmit(onSubmit)} >
     
      <input  {...register("name")} placeholder="enter name" /> <br />  <br />
      
    
      <input {...register("price", { required: true })}   placeholder="price" /> <br /> <br />
      <input {...register("desc", { required: true })} placeholder="desc" />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>} <br /> <br />
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Adduser;