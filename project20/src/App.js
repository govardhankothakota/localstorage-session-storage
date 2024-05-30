import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import DailyStatus from './components/DailyStatus';
import Messages from './components/Messages';
import More from './components/More';
import Task from './components/Task';


function App() {
  return (
  
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<DashBoard/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/dsu' element={<DailyStatus/>}></Route>
      <Route path='/task' element={<Task/>}></Route>
      <Route path='/messages' element={<Messages/>}></Route>
      <Route path='/more' element={<More/>}></Route>
    </Routes>
     </BrowserRouter>
    
    
   
  );
}

export default App;
