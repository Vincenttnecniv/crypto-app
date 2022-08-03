
const GetDeleteUsers = ({
    submit, submit2, allUsers, deleteData, username,setUsername
}) => {

return (
    <div>
        <h1 className="neo">Show Users</h1>
        <form onSubmit={submit}> {/* Gets all users*/}           
            <input type="submit" value="Show Users" />            
        </form>
        {           
            allUsers !== undefined ? <h4 style={{ marginTop: '5px', marginLeft: '14px' }} className="output">{allUsers}</h4> : <h4 style={{ marginTop: '5px', marginLeft: '14px' }} className="output">No Users ! Or Click To Show List</h4>            
        }        
        <br />
        <h1 className="neo">Delete Users</h1>
        <br />       
        <form onSubmit={submit2}> {/* Deletes users*/}            
            <input                
                type="text"                
                value={username}                
                onChange={(e) => setUsername(e.target.value)}                
                placeholder="Enter User to delete"                
                required               
            />
            <br />
            <input type="submit" value="Delete User" />            
        </form>
        <br />
        <br />            
        {           
            deleteData !== undefined ? <h4 style={{ marginTop: '-25px', marginBottom: '40px', marginLeft: '14px' }} className="output">{deleteData}</h4> : <h4 style={{ marginTop: '-25px', marginBottom: '40px', marginLeft: '14px' }} className="output">Press submit to delete a users</h4>            
        }       
    </div>
    )    
};
export default GetDeleteUsers; 