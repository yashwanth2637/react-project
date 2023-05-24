import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import { 
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     } from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light')
const [alert,setAlert] = useState(null);

const showAlert = (message,type) =>{
  setAlert({
    msg : message,
    type : type 
  });
  setTimeout(() => {
    setAlert(null)
  }, 3000);
}


  const toggleMode = () =>{
    if(mode === 'light' ){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled","success")
      //document.title = "TextUtils-Dark Mode";
      
      /*
      setInterval(() => {
        document.title = "TextUtils-is amazing";
      },2000 );
      setInterval(() => {
        document.title = " Install TextUtils now";
      },1800 );
    
    */
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      //document.title = "TextUtils-Light Mode";
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} /> 
       <Alert alert={alert}/>
      <div className="container my-13">
        
          {/* <Routes>
            <Route path="/about" element={<About/>}> */}
            <TextForm heading=" Try Yash's TextUtils- Word Counter, Character Counter" mode={mode} showAlert={showAlert}/>
              
          
          {/* </Routes> */}
        
      </div> 
    {/* </Router> */}
      
    </>
  );
}

export default App;
