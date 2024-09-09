import NavBar from "./Components/NavBar";
import TextUtils from "./Components/TextUtils";
import Alert from "./Components/Alert";
import { useState } from "react";

function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message)=>{
    setAlert(message)
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  return (
    <>
      <NavBar/>
      <Alert alert={alert}/>
      <TextUtils showAlert={showAlert}/>
    </>
  );
}

export default App;
