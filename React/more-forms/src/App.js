import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [firstName,setFirstName]=useState();
  const [fNameError, setFNameError] = useState("");
  const [lastName,setLastName]=useState();
  const [lNameError, setLnameError] = useState("");
  const [email,setEmail]=useState();
  const [emailError, setEmailError] = useState("");
  const [password,setPassword]=useState();
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  
  const handleFname= (e) => {
    setFirstName(e.target.value);
    if(e.target.value.length < 2) {
        setFNameError("First Name must be at least 2 characters");
    } else {
        setFNameError("");
    }
}

const handleLname= (e) => {
  setLastName(e.target.value);
  if(e.target.value.length < 2) {
      setLnameError("Last Name must be at least 2 characters");
  } else {
      setLnameError("");
  }
}

const handleEmail= (e) => {
  setEmail(e.target.value);
  if(e.target.value.length < 2) {
      setEmailError("Email must be at least 2 characters");
  } else {
      setEmailError("");
  }
}

const handlePassword= (e) => {
  setPassword(e.target.value);
  if(e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
  } else if( password !== confirmPassword) {
    
      setPasswordError("Password must match");
  }
  else if (password === confirmPassword) {
    setPasswordError("");
  }
}




  return (
    <div className="App">
      <p>First Name:<input type="text" onChange={e=>handleFname(e)}/></p>
      <p style={{color:'red'}}>{fNameError}</p>
      <p>Last Name:<input type="text" onChange={e=>handleLname(e)}/></p>
      <p style={{color:'red'}}>{lNameError}</p>
      <p>Email:<input type="text" onChange={e=>handleEmail(e)}/></p>
      <p style={{color:'red'}}>{emailError}</p>
      <p>Password:<input type="text" onChange={e=>handlePassword(e)}/></p>
      <p style={{color:'red'}} >{passwordError}</p>
      <p>Confirm Password:<input type="text" onChange={e=>setConfirmPassword(e.target.value)}/></p>
      <hr/>
    </div>
  );
}

export default App;
