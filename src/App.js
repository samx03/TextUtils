import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      showAlert("Dark mode has been enabled", "success")
      document.body.style.backgroundColor = '#042743';
      document.title = "TextUtils - Dark mode"
    } else {
      setMode('light')
      showAlert("Light mode has been enabled", "success")
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils - Light mode"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-5">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze:" mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
