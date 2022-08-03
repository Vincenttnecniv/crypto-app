import { useState } from "react";
import SignInForm from "./SignInForm";
import Navbar from "../../Navbar/Navbar";
import "../../../App.css" 

function SignIn() {

    const [userType, setUserType] = useState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    

  const handleSubmit = (e) => { //Hook to handle sign in     
    e.preventDefault()   
    var requestOptions = {         
      method: 'GET',     
      redirect: 'follow'            
    };
    
       
    fetch(`http://localhost:3001/signIn/${username}/${password}`, requestOptions)           
      .then(response => response.text())      
      .then(result => setUserType(result))     
      .catch(error => console.log('error', error));   
    };

    
  return (
    <div>
      <Navbar />      
      <br />
      <div className="container"> {/* Rendering Sign In Form */}        
        <SignInForm         
          submit={handleSubmit}
          setUsername={setUsername}
          setPassword={setPassword}
          username={username}
          password={password}
        /> 
      </div>
      {       
        userType !== undefined ? <h4 style={{ marginLeft: '745px' }} className="output">{userType}</h4> :          
          userType === undefined ? <h4 style={{ marginLeft: '810px' }} className="output">Not signed in !</h4> : ''        
      }
    </div>
  );
}

export default SignIn;