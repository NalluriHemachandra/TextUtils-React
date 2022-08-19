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
        // console.log("Lowercase button is clicked!");
        setText(text.toLocaleLowerCase());
    }

    const btnSentencecase = () => {
        // console.log("Sentencecase button is clicked!");
        var newText = text.toLowerCase().split(' ');
        for(var i = 0; i < newText.length; i++){
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1); 
        }
        var sentenceCaseText = newText.join(' ');
        setText(sentenceCaseText);
    }

    const btnCleartext = () => {
        // console.log("Clear text button is clicked!");
        setText('');
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
            <button className="btn btn-primary mx-2" onClick={btnSentencecase}>Convert To Sentence Case</button>
            <button className="btn btn-primary mx-2" onClick={btnCleartext}>Clear Text</button>
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
