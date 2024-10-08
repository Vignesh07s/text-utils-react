import React,{useState} from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [mode,setMode] = useState("dark");
  const SwitchTheme = ()=>{
    if (mode==="light") {
        setMode("dark");
        document.documentElement.setAttribute("data-bs-theme",mode);
    } else {
        setMode("light")
        document.documentElement.setAttribute("data-bs-theme",mode);
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">TextUtils</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <div className={`form-check form-switch d-flex ${mode==="dark"?"text-dark":"text-light"}`}>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                <input className="form-check-input ms-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={SwitchTheme}/>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
