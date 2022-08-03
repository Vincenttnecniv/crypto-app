import {useState} from "react";
import RegisterForm from "./RegisterForm";
import Navbar from "../../Navbar/Navbar";

function Register() {

    const [userType, setUserType] = useState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => { //Hook to handle register
        e.preventDefault()
        var requestOptions = {
          method: 'POST',
          redirect: 'follow'
        };
        
        fetch(`http://localhost:3001/register/${username}/${password}/${email}`, requestOptions)
            .then(response => response.text())
            .then(result => setUserType(result))
            .catch(error => console.log('error', error));
    };


    
  return (
    <div>
      <Navbar /> 
      <br />
        <div className="container"> {/* Rendering Register Form */}
         <RegisterForm 
          submit={handleSubmit}
          setUsername={setUsername}
          setPassword={setPassword}
          setEmail={setEmail}
          username={username}
          password={password}
          email={email}
              />
             </div>
           {
               userType !== undefined ?  <h4 style={{marginLeft:'786px'}} className="output">{userType}</h4> :
               userType === undefined ? <h4 style={{marginLeft:'810px'}} className="output">Not signed in !</h4> : ''
           } 
    </div>
  );
}

export default Register;
