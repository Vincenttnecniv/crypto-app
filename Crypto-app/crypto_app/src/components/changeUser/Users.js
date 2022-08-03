import ChangeUser from './ChangeUser'
import { useState } from "react";
import Navbar from '../Navbar/Navbar';
import GetDeleteUsers from './GetDeleteUsers'


const Users = () => { 

    const [change, setChange] = useState();   
    const [username, setUsername] = useState("");   
    const [changedUsername, setChangedUsername] = useState('');    
    const [password, setPassword] = useState('');    
    const [email, setEmail] = useState('');    
    const [role, setRole] = useState('');   
    const [allUsers, setAllUsers] = useState();   
    const [deleteData, setDeleteData] = useState();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
  
        fetch("http://localhost:3001/users", requestOptions)
            .then(response => response.text())
            .then(result => setAllUsers(result))
            .catch(error => console.log('error', error));
    };

    const handleSubmit1 = (e) => {//Hook to handle update of users
        e.preventDefault();
        var requestOptions = {
            method: 'PUT',
            redirect: 'follow'
        };
    
        fetch(`http://localhost:3001/update/${username}/${changedUsername}/${password}/${email}/${role}`, requestOptions)
            .then(response => response.text())
            .then(result => setChange(result))
            .catch(error => console.log('error', error));
    }; 

    const handleSubmit2 = (e) => {//Hook to handle update of users
        e.preventDefault();
      var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
      fetch(`http://localhost:3001/delete/${username}`, requestOptions)
        .then(response => response.text())
        .then(result => setDeleteData(result))
        .catch(error => console.log('error', error));
    }; 

    return (
        <div>
            <Navbar />
            <br />
            <GetDeleteUsers
            submit={handleSubmit}
            submit2={handleSubmit2}
            deleteData={deleteData}
            allUsers={allUsers}
            username={username}
            setUsername={setUsername}
            />
            {/* Rendering user data */}
            <ChangeUser                 
                submit1={handleSubmit1}                   
                username={username}               
                changedUsername={changedUsername}               
                password={password}              
                email={email}               
                role={role}                        
                setUsername={setUsername}               
                setChangedUsername={setChangedUsername}
                setPassword={setPassword}
                setEmail={setEmail}                
                setRole={setRole}                
                change={change}               
            />            
        </div>  
    )
}
export default Users;