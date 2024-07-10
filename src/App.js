import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
function App() {
  const [mode , setMode] = useState('light');
  const [toggleBtn , setToggleBtn] = useState('Enable dark mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
  }

  const toggleMode =() => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setToggleBtn('Enable light mode');
      showAlert("Dark mode has been enabled" , "success")

      // To change title dynamically
      // document.title = 'My-app Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setToggleBtn('Enable dark mode');
      showAlert("Light mode has been enabled" , "success")

      // To change title dynamically
      // document.title = 'My-app Light Mode'
    }
  }
  return (
    <>
    <Navbar title = "My App" mode = {mode} toggleMode = {toggleMode} toggleBtn = {toggleBtn}/>
    <Alert alert ={alert}/>
    <div className="container my-3">
      {/* <About /> */}
      <TextForm heading = "Enter the text to analyze below" mode={mode} showAlert = {showAlert} />
    </div>
    </>
  );
}

export default App;
