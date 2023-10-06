import React, { useState } from 'react';

import './App.css';
import NavBar from './components/NavBar';
// import TextFormm from './components/TextForm';
import Alert from './components/Alert';
import TextForm from './components/TextForm'
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  // eslint-disable-next-line no-unused-vars
  return(
  <>
  <NavBar title="TextWizard" mode={mode} toggleMode={toggleMode} key={new Date()}/>
  <Alert alert={alert}/>
  <div className="container my-5">
  {/* <TextForm showAlert={showAlert} heading="Write your Text here" mode={mode}/> */}
  <TextForm showAlert={showAlert} heading="Write your Text here" mode={mode}/>
  </div>
  </>
  );
}

export default App;
