import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
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
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control"  value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={btnUppercase}>Convert To Uppercase</button>
    </div>
  )
}
