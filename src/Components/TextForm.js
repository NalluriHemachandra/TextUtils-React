import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import CharacterRemaining from './CharacterRemaining';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';


export default function TextForm(props) {
  const [text, setText] = useState('');
  // text = "new state text" //wrong way to change the state of the text, we have change the state through function only.
  // setText("Enter new text here"); // correct way to change the state
    const handleOnChange = (event) => {
        // console.log("Handle on Change");
        setText(event.target.value);
        dispatch(actionCreators.addCharacters(event.target.value.length));
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

    const btnCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text copied','success');
    }

    const btnRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('successfully removed extra spaces','success');
    }

    const btnCleartext = () => {
        // console.log("Clear text button is clicked!");
        setText('');
        props.showAlert('Text has been cleared','success');
    }

    const dispatch = useDispatch();
  return (
    <>
        <div className='container'  style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  value = {text} 
                 style={{color: props.mode === 'dark'? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#13466e' : 'white'}}
                onChange = {handleOnChange} id="myBox" rows="8" maxLength={100}></textarea>
            </div>
            <CharacterRemaining/>
            <button disabled= {text.length === 0} className="btn btn-primary mx-2" onClick={btnUppercase}>Convert To Uppercase</button>
            <button disabled= {text.length === 0} className="btn btn-primary mx-2" onClick={btnLowercase}>Convert To Lowercase</button>
            <button disabled= {text.length === 0} className="btn btn-primary mx-2" onClick={btnSentencecase}>Convert To Sentence Case</button>
            <button disabled= {text.length === 0} className="btn btn-primary mx-2" onClick={btnRemoveExtraSpaces}>Remove Extra Spaces</button>
            <button disabled= {text.length === 0} className="btn btn-primary mx-2" onClick={btnCopy}>Copy Text</button>
            <button disabled= {text.length === 0} className="btn btn-primary mx-2" onClick={btnCleartext}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((word) => {return word.length!==0}).length} words and {text.length} characters</p>
            <p>{parseFloat(0.008 * (text.split(/\s+/).filter((word) => {return word.length!==0}).length)).toFixed(2)} minutes to read the text.</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Enter something in the textbox to preview here"}</p>
        </div>
    </>
  )
}
