import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpperClick = () => {
        // console.log('clicked on upper case' + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('text has been converted in upperCase','success')
    }
// f for event change
    const handleonChange = (event) => {
        setText(event.target.value)   
    }
// f for display text in lower case
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('text has been converted in lowerCase ','success')
    }
// f for display Clear text
    const handleClearClick = () => {
        setText('');
        props.showAlert('text has been clear','success')
       
    }
    // title case
    const handleTitleClick = () => {
    
        // let title = text.split(' ');
        let title = text.split(/[ ]+/); //regular expressions are used if there is 1 or more than one spaces in wors thats why
        let newText = '';
        for (let items of title) {
            if(items[0] !== undefined){
            newText += items[0].toUpperCase() + items.slice(1) + ' ';
            }
            else{
                props.showAlert('in your text there is extra spaces so first use our spaces removal function then use this ','warning')
            }
        }
        setText(newText)
        props.showAlert('text has been coverted in titleCase','success')
    }
    // DarkMode
    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btn, setbtn] = useState('Enable Light Mode')
    const handleMode = () => {


        if (myStyle.color === 'black') {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'

            })
            console.log('ok');
            setbtn('enable Light Mode')
        } else {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'

            })
            setbtn('Enable Dark Mode')
            console.log('white');
        }

    }

    // copy to clipBoard
    const handleCopy = ()=>{
        console.log('copy');
        let myBox = document.getElementById('myBox');
        myBox.select();
        navigator.clipboard.writeText(myBox.value)
        props.showAlert('text has been Copied ','success')
        
       
    }

    // remove extra spaces
    const handleSpaces = ()=>{
        let newText =  text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert('Extra spaces has been removed ','success')
    }
    
    return (
        <>
            <div className="container">
                <button style={myStyle} onClick={handleMode} type="submit" className="mx-0 mt-2 btn  btn-outline-dark ">{btn}</button>
                <h1 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`} >{props.heading} </h1>
            </div>
            <div className='container my-4 py-2' style={myStyle} >

                
                <form className='my-3'>
                    <div className="form-group ">
                        <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handleonChange} placeholder='enter your text'></textarea>
                    </div>
                </form>
                {/* here is the button for the convert text into uppercase */}
                <button type="submit" onClick={handleUpperClick} className="mx-3 my-2  btn btn-outline-warning">Convert to Uppercase</button>
                <button type="submit" onClick={handleLowerClick} className="mx-3 my-2 btn btn-outline-warning">Convert to Lowercase</button>
                <button type="submit" onClick={handleClearClick} className="mx-3 my-2 btn btn-outline-warning">clear</button>
                <button type="submit" onClick={handleTitleClick} className="mx-3 my-2 btn btn-outline-warning">Title Case</button>
                <button type="submit" onClick={handleCopy} className="mx-3 my-2 btn btn-outline-warning">Copy text</button>
                <button type="submit" onClick={handleSpaces} className="mx-3 my-2 btn btn-outline-warning">Remove extra spaces</button>
            </div>
            <div className="container" style={myStyle}>
                <h2>Your text summary</h2>
                <h6>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length}words and {text.length} characters </h6>
                <h6>{0.08 * text.split(' ').filter((element)=>{return element.length !== 0}).length} minutes take to Read these words</h6>
                <h3 className='mt-5 mb-2'>Preview</h3>
                <p>{text.length>0 ? text:'enter something to preview your text'}</p>
            </div>
           
        </>
    )
}
TextForm.propTypes = { type: PropTypes.string }
