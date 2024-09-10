import NavBar from "./Components/NavBar";
import TextUtils from "./Components/TextUtils";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message)=>{
    setAlert(message)
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  return (
    <Router>
      <NavBar/>
      <Alert alert={alert}/>
      <Routes>
          <Route  path="/" element={<TextUtils showAlert={showAlert}/>}/>
          <Route  path="/text-utils-react" element={<TextUtils showAlert={showAlert}/>}/>
          <Route  path="/about" element={<About/>}/>  
      </Routes>
    </Router>
  );
}

export default App;
