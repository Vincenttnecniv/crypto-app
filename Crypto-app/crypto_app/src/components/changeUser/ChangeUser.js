


const ChangeUser = ({
  username, setUsername, changedUsername, setChangedUsername, password,  
  setPassword, email, setEmail, role, setRole, change, submit1,   
}) => {

  return (     
    <div>     
      <h1 className="neo">Update Users</h1>     
      <br />     
      <form onSubmit={submit1}>{/* Gets input to update users*/}       
        <input         
          type="text"          
          value={username}          
          onChange={(e) => setUsername(e.target.value)}          
          placeholder="Enter Username To Change"          
        />
        <br />        
        <input         
          type="text"          
          value={changedUsername}          
          onChange={(e) => setChangedUsername(e.target.value)}          
          placeholder="Enter Changed Username"          
          required          
        />        
        <br />        
        <input          
          type="text"          
          value={password}         
          onChange={(e) => setPassword(e.target.value)}          
          placeholder="Enter Changed Password"          
        />
        <br />       
        <input         
          type="text"         
          value={email}         
          onChange={(e) => setEmail(e.target.value)}          
          placeholder="Enter Changed Email"          
          required         
        />        
        <br />       
        <input          
          type="text"          
          value={role}          
          onChange={(e) => setRole(e.target.value)}          
          placeholder="Enter Changed Role"          
          required          
        />        
        <br />        
        <input type="submit" value="Submit" />                
        <br />        
      </form>      
      {change === undefined ? <h3 style={{ marginTop: '5px', marginLeft: '14px' }} className="output">Choose a user to update.</h3> : <h3 style={{ marginTop: '5px', marginLeft: '14px' }} className="output">{[change]}</h3>}      
    </div>    
  );
};
export default ChangeUser; 

