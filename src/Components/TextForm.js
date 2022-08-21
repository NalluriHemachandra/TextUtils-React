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
        props.showAlert('Converted to Uppercase','success');
    }

    const btnLowercase = () => {
        // console.log("Lowercase button is clicked!");
        setText(text.toLocaleLowerCase());
        props.showAlert('Converted to Lowercase','success');
    }

    const btnSentencecase = () => {
        // console.log("Sentencecase button is clicked!");
        var newText = text.toLowerCase().split(' ');
        for(var i = 0; i < newText.length; i++){
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1); 
        }
        var sentenceCaseText = newText.join(' ');
        setText(sentenceCaseText);
        props.showAlert('Converted to Sentence Case','success');
    }

    const btnCleartext = () => {
        // console.log("Clear text button is clicked!");
        setText('');
        props.showAlert('Text has been cleared','success');
    }

  return (
    <>
        <div className='container'  style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  value = {text} 
                 style={{color: props.mode === 'dark'? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}}
                onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={btnUppercase}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={btnLowercase}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={btnSentencecase}>Convert To Sentence Case</button>
            <button className="btn btn-primary mx-2" onClick={btnCleartext}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.length > 0 ? text.split(' ').filter(word => word !=='').length: 0} words and {text.length} characters</p>
            <p>{text.length > 0 ? parseFloat(0.008 * (text.split(' ').filter(word => word !=='').length)).toFixed(2) : "0"} minutes to read the text.</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Enter something in the textbox to preview here"}</p>
        </div>
    </>
  )
}
