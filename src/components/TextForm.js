import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    // text = "asdsdad" //wrong way to change state
    // setText = "asadasd" //correct way

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Cleared text!", "success")
    }

    const handleReverseClick = () => {
        let newText = text.split(" ").reverse().join(" ");
        setText(newText)
        props.showAlert("Text Reversed!", "success")
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!", "success")
    }

    const handleOnChange = (event) => {
        // console.log("On Change.")
        setText(event.target.value)
    }
    return (
        <>
            <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>{props.heading}</h3>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleLowClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleReverseClick}>Reverse Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleCopy}>Copy Text</button>

            <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.length > 0 ? text.trim().split(" ").length : 0} words and {text.length} characters</p>
                <p>{text.length > 0 ? 0.008 * text.trim().split(" ").length : 0} Minute read.</p>
                <h2> Preview </h2>
                <p>{text.length > 0 ? text : "Nothing to preview."}</p>
            </div>
        </>
    )
}
