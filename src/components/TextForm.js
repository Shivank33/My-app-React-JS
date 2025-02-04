import React, {useState} from 'react'

function TextForm(props) {
    const [text, setText] = useState('I am learning React JS');
    const [count , setCount] = useState(0);
    // text = "new text";  // wrong way
    // setText("new text");  // correct way to change state.
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase" , "success");
    }
    const handleDownClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase" , "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        // we can update value using above line.
    }
    const countVowels = () => {
        for(let i=0 ; i<text.length; i++){
            let count1 = text.match(/[aeiou]/gi).length;
            setCount(count1);
            props.showAlert("Counted Vowels" , "success");
        }
    }
    const copyText = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied" , "success");
    }
    const removeSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed" , "success");
    }
    // const inverseText = () => {
    //     let text1 = text.split(" ").reverse().join(" ");
    //     setCount(text1);
    // }
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                    color : props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleDownClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={countVowels}>Count Vowels</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={copyText}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={removeSpaces}>Remove Extra Spaces</button>
            {/* <button className="btn btn-warning mx-2" onClick={inverseText}>Inverse Text</button> */}

        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>Text Summary</h2>
            <p>{text.split(/\s+/).filter((word) => word !== "").length} words and {text.length} characters</p>
            <p>{text.split(/\s+/).filter((word) => word !== "").length * 0.008} minutes to read</p>
            {/* 0.008 minutes to read one word. */}
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter your text in textbox to preview here"}</p>
            <h3>Vowels are:</h3>
            <p>{count}</p>
            {/* <h3>Reversed Text:</h3>
            <p>{text}</p> */}
        </div>
        </>
    )
}

export default TextForm
