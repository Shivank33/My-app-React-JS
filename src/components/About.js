import React, {useState} from 'react'

function About() {
    const [myStyle , setMyStyle] = useState({
        color: '#042743',
        backgroundColor: 'white'
    });

    const [btnText , setBtnText] = useState('Enable Dark mode');

    const changeColor = ()=> {
        if(myStyle.color === 'white') {
            setMyStyle({
                color: '#042743',
                backgroundColor: 'white'
            })
            setBtnText('Enable dark mode');
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: '#042743'
            })
            setBtnText('Enable light mode');
        }
    }

    return (
        <>
        <div className='container text-center'>
            <h1 className='my-3 text-info'>About Us</h1>
            <div className="container border border-info border-3 rounded-5 p-3 mb-3" style={myStyle}>
                <h3>This is free app which allows you many functions on text like -</h3>
                <h4>* Convert to Uppercase</h4>
                <h4>* Convert to Lowercase</h4>
                <h4>* Count Vowels</h4>
                <h4>* Count Words and Characters</h4>
                <h4>* Copy Text</h4>
                <h4>* Remove Extra Spaces</h4>
            </div>
            <button type="button" className="btn btn-info my-2 " onClick={changeColor}>{btnText}</button>
        </div>
        </>
    )
}

export default About
