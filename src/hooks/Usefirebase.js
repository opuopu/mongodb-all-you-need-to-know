import { GoogleAuthProvider,getAuth, signInWithPopup, onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Initialize from "./Init";


const Firebaseuse = () =>{
Initialize()
    const [user,setuser] =useState({})
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    const Goolgesign = () =>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const user = result.user
            setuser(user)

        })
    }
    useEffect(()=>{
    
      
        onAuthStateChanged(auth,user=>{
            if(user){
                setuser(user)
            }
            else{
                setuser({})
               
            }
        
        })
      
    },[])
    return {Goolgesign,user}
}
export default Firebaseuse 