import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
// import About from './components/About';
 
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  // Controlling Dark Mode theme

  const [mode, setMode] = useState("light")

  const toggaleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#506574"
      showAlert(" Dark mode has enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert(" Light mode has enabled", "success")
    }
  }

  // Controlling alert message
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
 
  return (
    <>
       {/* <Router> */}

        <Navbar title="Textutils" toggaleMode={toggaleMode} mode={mode} />
        <Alert alert={alert} />      
         <div className="container my-3">
          {/* <Routes>
            <Route  path='/' element={<Textarea heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
            <Route   path='/About' element={<About />} />
            <Route  path='/Home' element={<Textarea heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          </Routes> */
          <Textarea heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
          }
        </div> 

      {/* </Router> */}
    </>
  );
}

export default App;
