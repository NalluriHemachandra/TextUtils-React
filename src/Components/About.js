import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle] = useState( 
    // {
    //     color : 'black',
    //     backgroundColor : 'white'
    // })

    let myStyle = {
        color : props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor : props.mode === 'dark' ? '#042743' : 'white'
    }
  return (
    <div className='container my-4' style={myStyle}>
        <h2 className="my-3">About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><strong>Analyze Your Text</strong></button>
                </h2>
                <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Textutils give you a way to analyze your text quickly and efficiently. Be it a word count, character count or to analyze the time to read the text.
                    </div>
                </div>
            </div>
            <div div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><strong>Free To Use</strong></button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Textutils is a free character counter that provides free character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.    
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatibility</strong></button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        The word counter software works in any web browser such as Chrome, Safari, Edge, Opera, Firefox. It suits count the characters in facebook, blog, books, excel document, pdf document, essays, etc. 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
