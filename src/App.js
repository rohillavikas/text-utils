
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light.')
  const [alert, setalert] = useState(null)

  const showAlert = (message, type)=>{
setalert({
  msg: message,
  type: type
})
setTimeout(()=>{
setalert(null)
}, 2000)

  }

  const removeBodyClasses = ()=>{
document.body.classList.remove("bg-light")
document.body.classList.remove("bg-dark")
document.body.classList.remove("bg-success")
document.body.classList.remove("bg-danger")
document.body.classList.remove("bg-warning")
  }
  
  const toggleMode = (cls)=>{
  
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add("bg-"+cls)
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = "white"
      
      showAlert("Dark mode has been enabled", "success")
    }else{
      setMode('dark')
      document.body.style.backgroundColor = "#3f4347"
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
       <Router>
        <Navbar title="TextUtiles" about="About" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container my-5">

          <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>

          <Route exact path="/TextForm"
          element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
            
          </Route>
           </Routes>
          </div>
        </Router>

{/* <About heading="About us"/> */}
    </>
  );
}

export default App;
