import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config";

const Initialize = () =>{
    const app = initializeApp(firebaseConfig);
    return app
}
export default Initialize