import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './pages/header/Header';
import Home from './pages/home/Home';
import Adduser from './pages/adduser/Adduser';
import Login from './pages/login/Login';
import Privateroute from './pages/login/Privateroute';
import Eventform from './pages/event/Eventform';
import Firebaseuse from './hooks/Usefirebase';
import authprovider from './context/authprovider';
import Authprovider from './context/authprovider';
import Event from './pages/ev/Event';


function App() {
  return (

<Authprovider>
  
<BrowserRouter>
  <Header></Header>
  <Switch>

<Route  path="/home">
<Home></Home>


</Route>
<Route path="/adduser">
<Adduser></Adduser>
</Route>
<Route path="/login">
   <Login></Login>
</Route>
<Route path="/event">
<Event></Event>
</Route>
<Privateroute path="/event/:id">
  <Eventform></Eventform>
   
</Privateroute>
  </Switch>
  </BrowserRouter>
</Authprovider>

 
  );
}

export default App;
