import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";




// routers




function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  // for the background
  const [background, setbackground] = useState('light');
  const handleBackground = (event) => {
    setbackground(event.target.value)

  }
  console.log(background);
  const bgonClick = (e) => {
    setbackground(e.target.value);

    document.body.style.background = e.target.value;
  }



  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert('darkMode has been enabled', 'success');
      document.title = 'Text Termiator Dark Mode';
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('lightMode has been enabled', 'success')
      document.title = 'Text Termiator Light Mode';

    }
  }
  return (

    <>
      {/* <Router>
        <Navbar title='Terminators ' mode={mode} about=' about' toggleMode={toggleMode} background={background} handleBackground={handleBackground} bgonClick={bgonClick} />
        <Alert alert={alert} />


        <Routes>
          <Route path="/about" element={<About />}>
        
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter your text to analyze' mode={mode} />}>

          </Route>
        </Routes>
      </Router> */}
      <Navbar title='Text Terminators ' mode={mode} about=' about' toggleMode={toggleMode} background={background} handleBackground={handleBackground} bgonClick={bgonClick} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading='Enter your text to analyze' mode={mode} />
    </>

  );
}

export default App;
