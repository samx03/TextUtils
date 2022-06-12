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
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls)
    const capitalize = (word)=>{
      let lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
    if (mode === 'light') {
      setMode('dark')
      showAlert(capitalize(cls) + " mode has been enabled", "success")
    } else {
      setMode('light')
      showAlert("Light mode has been enabled", "success")
    }
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
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
