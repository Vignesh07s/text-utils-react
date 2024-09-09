import React,{useState} from 'react'

export default function NavBar() {
  const [mode,setMode] = useState("light");
  const [color,setColor] = useState("#4f61bacf");
  const SwitchTheme = ()=>{
    const body = document.body;
    const textarea = document.getElementsByClassName('dark-theme');
    if (mode==="light") {
      setColor("#729b9d5e");
        body.style.backgroundColor = '#2e3440';
        body.style.color = 'white';
        textarea[0].style.backgroundColor = '#2e3440';
        textarea[0].style.color = 'white';
        textarea[0].style.setProperty('--placeholder-color', '#ccc');
        textarea[1].style.backgroundColor = '#2e3440';
        textarea[1].style.color = 'white';
        textarea[1].style.setProperty('--placeholder-color', '#ccc');
        setMode("dark");
        
    } else {
      setColor("#2F3C7E");
        body.style.backgroundColor = '';
        body.style.color = '';
        textarea[0].style.backgroundColor = '';
        textarea[0].style.color = '';
        textarea[0].style.setProperty('--placeholder-color', 'rgba(0, 0, 0, 0.6)');
        textarea[1].style.backgroundColor = '';
        textarea[1].style.color = '';
        textarea[1].style.setProperty('--placeholder-color', 'rgba(0, 0, 0, 0.6)');
        setMode("light");
    }
}
  return (
    <nav className="navbar navbar-expand-lg" style={{'backgroundColor':color}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">TextUtilsApp</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
          </ul>
          <div className="form-check form-switch d-flex">
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            <input className="form-check-input ms-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={SwitchTheme}/>
          </div>
        </div>
      </div>
    </nav>
  )
}