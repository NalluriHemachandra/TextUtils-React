import './App.css';
import About from './Components/About';
import NavBar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
  }
  return (
    <>
      <Router>
        {/* <NavBar title = "TextUtils" aboutText = "About"/> */}
        <NavBar title = "TextUtils" aboutText = "About" mode = {mode} toggleMode = {toggleMode}/>
        <div className='container my-3'>
            <Routes>
              {/* using exact is important because react matches the endpoint exactly. otherwise react matches partially */}
              <Route exact path='/' element = {<TextForm  mode = {mode} heading = "Enter the Text to Analyze below"/>}></Route>
              <Route exact path='/about' element = {<About  mode = {mode}/>}></Route>
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
