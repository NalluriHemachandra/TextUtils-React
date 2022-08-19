import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');
  // text = "new state text" //wrong way to change the state of the text, we have change the state through function only.
  // setText("Enter new text here"); // correct way to change the state
    const handleOnChange = (event) => {
        // console.log("Handle on Change");
        setText(event.target.value);
    }

    const btnUppercase = () => {
        // console.log("Uppercase button is clicked!");
        setText(text.toUpperCase());
    }

    const btnLowercase = () => {
        // console.log("Uppercase button is clicked!");
        setText(text.toLocaleLowerCase());
    }

  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={btnUppercase}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={btnLowercase}>Convert To Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{parseFloat(0.008 * (text.split(" ").length)).toFixed(2)} minutes to read the text.</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  )
}
