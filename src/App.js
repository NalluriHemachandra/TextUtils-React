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
import Alert from './Components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success');
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled','warning');
    }
  }
  return (
    <>
      <Router>
        <NavBar title = "TextUtils" aboutText = "About" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <div className='container my-3'>
            <Routes>
              {/* using exact is important because react matches the endpoint exactly. otherwise react matches partially */}
              <Route exact path='/textutils/home' element = {<TextForm showAlert = {showAlert}  mode = {mode} heading = "Enter the Text to Analyze below"/>}></Route>
              <Route exact path='/textutils/about' element = {<About  mode = {mode}/>}></Route>
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
