import React from 'react'
import {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    //text=new text; //Wrong way
    //setText(new text); // correct way

    const uppr = () =>{                                                                      
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been Converted to Upper case","success");
        
    };

    const handleup =(event) =>{
        console.log("onchange");
        setText(event.target.value)
    };

    const lower = () => {
        let text2 = text.toLowerCase();
        setText(text2);
        props.showAlert("Text has been Converted to Lower case","success");
    };

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert(null,"success");
      
    }
    
    const clear = () => {
      let ntext = '';
      setText(ntext);
      props.showAlert("Text has been cleared","success");
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className="my-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control my-3" id="mybox" rows="8" value={text} onChange={handleup} style={{backgroundColor:props.mode==='dark'?'#3c4561':'white',color:props.mode==='dark'?'white':'black'}}> </textarea>
        </div>
          <button disabled={text.length===0} type="button mb-8" className="btn btn-primary" onClick={uppr}  >Convert to Upper case</button>
          <button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={lower}  >Convert to Lower case</button>
          <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
          <button disabled={text.length===0} type="button" className="btn btn-danger mx-2" onClick={clear} onChange={handleup}>Clear</button>
    </div>
        <div style={{color:props.mode==='dark'?'white':'black'}}>
         <h2> Your Text preview</h2>
         <p><b>{text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</b></p>
         <p><b>{0.08 * text.split(" ").length}min to read </b></p>
         <h3>Preview</h3>
         <p>{text.length>0?text:"Nothing to Preview here"}</p>
    </div>
    </>
  )
}
