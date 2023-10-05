import React, { useState } from 'react'

export default function Forms(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlertProp("Converted to uppercase", "success");
  }

  const handleClear = () => {
    setText('');
    props.showAlertProp("Cleared the text", "success");
  }
  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text
    window.speechSynthesis.speak(msg)
  }

  const handleSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }
  const [text, setText] = useState(" ");
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
     
        <h2>{props.heading}</h2>
        <div className='mb-3'>
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>To Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleSpeak}>Speak</button>
        <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove Extra Space</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{text.split(" ").length * 0.008} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}