import './App.css';
import About from './Components/About';
import NavBar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <NavBar title = "TextUtils" aboutText = "About"/>
        <div className='container my-3'>
            <Routes>
              {/* using exact is important because react matches the endpoint exactly. otherwise react matches partially */}
              <Route exact path='/' element = {<TextForm heading = "Enter the Text to Analyze below"/>}></Route>
              <Route exact path='/about' element = {<About/>}></Route>
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
