import './App.css';
import NavBar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <NavBar title = "TextUtils" aboutText = "About"/>
      <div className='container my-3'>
        <TextForm heading = "Enter the Text to Analyze below"/>
      </div>
    </>
  );
}

export default App;
