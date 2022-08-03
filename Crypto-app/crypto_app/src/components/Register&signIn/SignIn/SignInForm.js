

const SignInForm = ({ submit, setUsername, setPassword, username, password }) => {
    return (
        <div className="signIn">
        

            <h1 className="neon">Sign In</h1>
            <br />
        
        <form onSubmit={submit}> {/* Get inputs for Sign In */}
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username.."
                required/>
            <br />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password.."
                required/>
        
            <br />
            <input className={'submit'} placeholder="Sign In" style={{marginTop:'10px'}} type={'submit'} />
             </form>
             </div>
    );
  };
  export default SignInForm;