import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
//import Aleart from './components/Aleart';

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
//useState[alert,setAlert]=useState(null);
//const showAlert=(message,type)=>{
  //setAlert(
    //{
      //msg:message,
      //type:type
    //}
  //)
//}

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.title = "TextUtilities - Dark Mode";

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    <Navbar title="TextUtilities " mode={mode} toggleMode={toggleMode} />
      document.title = "TextUtilities - Light Mode";

    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtilities " mode={mode} toggleMode={toggleMode} />
    {/* <Aleart Aleart={alert}/> */}
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    </div>
    </> 
  );
}

export default App;