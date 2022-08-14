import React, {useState} from 'react'

export default function Textform(props) {
  const [text, setText] = useState('');
  
  const handelReset = ()=>{
    setText('');
  }

  const handelChange = (event)=>{
    setText(event.target.value);
  }
  
  const handelCopy = ()=>{
    navigator.clipboard.writeText(text);
    alert("Text Copied");
  }

  const handelUpper = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handelExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    newText = newText.join(" ");
    setText(newText);
  }

  return (
    <>
        <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3 my-2">
            <textarea className="form-control my-3" style={{backgroundColor: props.mode==='dark'?'black':'white' ,color: props.mode==='dark'?'white':'black'}} id="txtbox" rows="10" placeholder="Enter your text..." value={text} onChange={handelChange}></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={handelReset}>Reset</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handelCopy}>Copy Text</button>
        <button type="button" className="btn btn-primary" onClick={handelUpper}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handelExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4">
            <h3>Your Text Summary</h3>
            <p><b>Words:</b> {text.split(' ').filter(word => word !== '').length} <b>Characters:</b> {text.length}</p>
        </div>
    </>
  )
}
