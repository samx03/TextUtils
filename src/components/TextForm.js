import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    // text = "asdsdad" //wrong way to change state
    // setText = "asadasd" //correct way

    const handleUpClick = () => {
        // console.log("Uppercase was Clicked." + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText)
    }

    const handleReverseClick = ()=>{
        let newText = text.split(" ").reverse().join(" ");
        setText(newText)
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const handleOnChange = (event) => {
        // console.log("On Change.")
        setText(event.target.value)
    }
    return (
        <>
            <div className="mb-3">
                <h3>{props.heading}</h3>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
            <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse Text</button>
            <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>

            <div className="container my-5">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minute read.</p>
                <h2> Preview </h2>
                <p>{text}</p>
            </div>
        </>
    )
}
