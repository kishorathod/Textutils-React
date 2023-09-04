import React, { useState } from 'react'


export default function Textarea(props) {
    const [text, setText] = useState("");

    const handleUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Text is converted to Uppercase","success")
    }
    const handleLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Text is converted to Lowecase","success")

    }
    const handleClearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert(" Text is cleared","success")
    }

    const handlerOnChange = (event) => {
        setText(event.target.value);
    }

    // text copy function 

    const handleCopy=()=>{
        let  newText = document.getElementById("myBox")
        newText.select();
        newText.setSelectionRange(0, 99999); /* For mobile devices */

        try {
            navigator.clipboard.writeText(newText.value)
            props.showAlert(" Text is Copied","success") 
        } catch (error) {
            props.showAlert("Sorry This feature wont work in mobiles try to copy by selecting a text ","primary") 
        }
         
    }
  
    // remove extara spaces (this is a regex concept)
 const handleExtraSpace = ()=>{
     let newText = text.split(/[ ]+/); 
     setText(newText.join(" "))
     props.showAlert(" Extra spaces removed","success")
 }

    return (
        <>
            <div className="container my-4 " style={{color:props.mode==="dark"?"white":"black"}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handlerOnChange} style={{backgroundColor:props.mode==="dark"?"#506574":"white",color:props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" onClick={handleUppercase} className="btn btn-primary my-2 mx-2">Convert to Uppercase</button>
                <button type="button" onClick={handleLowercase} className="btn btn-primary my-2 mx-2">Convert to Lowecase</button>
                <button type="button" onClick={handleClearText} className="btn btn-primary my-2 mx-2">ClearText</button>
                <button type="button" onClick={handleCopy} className="btn btn-primary my-2 mx-2">CopyText</button>
                <button type="button" onClick={handleExtraSpace} className="btn btn-primary my-2 mx-2">Remove extra space</button>
            </div>
            <div className="container my-4" style={{color:props.mode==="dark"?"white":"black"}} >
                <h2>Your text Summery</h2>
                <p>{text.split(" ").length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minute to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"enter something in the textbox above to preview it"}</p>
            </div>
        </>
    )
}



/* split() method : The split() method divides a string into a list of
                  substrings and returns them as an array.

 const message = "JavaScript::is::fun";
  divides the message string at :: 
 let result = message.split("::");
 console.log(result);

 Output: [ 'JavaScript', 'is', 'fun' ] 

 */

/* Reular Expression (RegEx) : 
   In JavaScript, a Regular Expression (RegEx) is an object that describes a sequence 
   of characters used for defining a search pattern. For example,

   The regular expression consists of a pattern enclosed between slashes /. For example,
    cost regularExp = /abc/;
*/

