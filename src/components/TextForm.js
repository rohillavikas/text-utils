import React, {useState}from 'react'


export default function TextForm
(props) {
    const handleUpClick = ()=>{
       
        let newtext = text.toUpperCase()

        setText(newtext)
        props.showAlert("convert to uppercase","success")
    }
    const handlelowClick = ()=>{
      const newtext1 = text.toLowerCase()
      setText(newtext1)
      props.showAlert("convert to Lowerercase","success")
    }
    const handleonChange =(event)=>{
       
        setText(event.target.value)
        
    }
    const handledelete = ()=>{
      const delete1 = ""
      setText(delete1)
      props.showAlert("Text deleted","success")
    }
    const handleCopy = ()=>{
      console.log("i am copy");
      
      var text1 = document.getElementById("mybox")
      text1.select()
      
      navigator.clipboard.writeText(text1.value)
      document.getSelection().removeAllRanges()
      props.showAlert("copy text","success")
      
    }
    const handleExtraSpaces= ()=>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Remove extra spaces","success")
    }
    const [text, setText] = useState("");
    
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white':'#212529'}}>
    <h1> {props.heading}</h1>
  <textarea className="form-control" id="mybox" 
 value={text} onChange={handleonChange} style={{backgroundColor: props.mode === 'dark'? '#3f4347':'white',
 color: props.mode === 'dark'? 'white':'#212529'}} rows="8"></textarea>
<button disabled={text.length===0} className='btn btn-primary my-3'   onClick={handleUpClick}>Convert to uppercase</button>
<button disabled={text.length===0} className='btn btn-primary my-3 mx-3' onClick={handlelowClick}>Convert to lowercase</button>
<button disabled={text.length===0} className='btn btn-primary my-3 mx-3' onClick={handledelete}>Clear text</button>
<button disabled={text.length===0} className='btn btn-primary my-3 mx-3' onClick={handleCopy}>Copy text</button>
<button disabled={text.length===0} className='btn btn-primary my-3 mx-3' onClick={handleExtraSpaces}>remove spaces</button>
</div>
<div className="container my-4"  style={{color: props.mode === 'dark'? 'white':'#212529'}}>
<h1>your text summary</h1>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} and {text.length} charactor</p>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length * 0.48} Second read</p>
<h2>preview</h2>
<p>{text.length>0?text:"Enter somothing to preview here"}</p>
</div>
   </> 
  )
}
  