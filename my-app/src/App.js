import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
// import { ReactDOM } from 'react';
import Navbar from './components/Navbar';
import Accordion from './components/Accordion';
import { useState } from 'react';
import Forms from './components/Forms';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === "light") { 
      setMode("dark")
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title='Text Utils' about='About' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
        <Route path="/" element={<Forms heading="Analyze text here" mode={mode} showAlertProp={showAlert}></Forms>}/>
    </Routes>
    <Routes>
      <Route path="/about" element={<Accordion/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
