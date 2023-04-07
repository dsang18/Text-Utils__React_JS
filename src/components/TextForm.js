import React, {useState} from 'react'

export default function TextForm(props) {
    const ConvertToUpper = ()=>{
        setText(text.toUpperCase())
        props.toggleAlert("Converted to uppercase!","success")
    }
    const ConvertToLower = ()=>{
        setText(text.toLowerCase())
        props.toggleAlert("Converted to lowercase!","success")
    }
    const ReplaceWord = ()=>{
        let word = prompt("Enter the word you want to find:")
        let replace = prompt("Enter the word to replace:")
        setText(text.replaceAll(word,replace))
        props.toggleAlert("Replaced all words!","success")
        
    }
    const ClearAllText = ()=>{
        setText("")
        props.toggleAlert("All text cleared!","success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
        // by onchange event provides an event value that can be used to access the value of input
    }
    const SentenceOnNewLine = ()=>{
        let sentence = text.split(".")
        let i = 0;
        let newText = ""
        for(i=0;i<sentence.length;i++){
            newText+=sentence[i]
            newText+=".\n"
        }
        setText(newText)

    }
    const CopyText = ()=>{
        navigator.clipboard.writeText(text);
    }


    const [text,setText] =  useState("")
  return (
      <>
        <div className="container">
            <div className="mb-3">
                <h2 className='my-3'>{props.heading}</h2>
                <textarea className="form-control shadow p-3 mb-3 rounded border border-dark border-3" style={{backgroundColor:props.mode==="dark"?"#ccdfe6":"white"}} id="TextToAnalyse" rows="6" value={text} onChange={handleOnChange}></textarea>

                <button className='btn btn-primary mx-1 my-2' disabled={text.length===0} onClick={ConvertToUpper}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1 my-2' disabled={text.length===0} onClick={ConvertToLower}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1 my-2' disabled={text.length===0} onClick={ClearAllText}>Clear All</button>
                <button className='btn btn-primary mx-1 my-2' disabled={text.length===0} onClick={ReplaceWord}>Find & Replace Word</button>
                <button className='btn btn-primary mx-1 my-2' disabled={text.length===0} onClick={SentenceOnNewLine}>Sentence on New Line</button>
                <button className='btn btn-primary mx-1 my-2' disabled={text.length===0} onClick={CopyText}>Copy Text</button>
                
            </div>
        </div>
        <div className="container">
            <h2 className="my-3">Your Text Summary</h2>
            <ul>
                <li><h5>Number of character:{text.trim().length}</h5></li>
                <li><h5>Number of words:{text.length>0?text.trim().split(/\s+/).length:0}</h5></li>
                <li><h5>Time to read: {text.length>0?0.008*text.trim().split(/\s+/).length:0} minutes</h5></li>
                <li><h5>Sentences: {text.trim().split(".").filter((elem)=>{return elem!==""}).length}</h5></li>
            </ul>

            <h2 className="mt-4">Preview</h2>
            <p>{text.length>0?text:"Enter text to preview"}</p>
        </div>
      </>
  )
}
