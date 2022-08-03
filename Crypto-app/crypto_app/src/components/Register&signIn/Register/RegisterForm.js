

const RegisterForm = ({ submit, setUsername, setPassword, setEmail, username, password, email }) => {
    return (
        <div className="signIn">
            <h1 className="neon">Register</h1>
            <br />
        <form onSubmit={submit}> {/* Get inputs for registration */}
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
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email.."
                required/>
            <br />
            <input className={'submit'} style={{marginTop:'10px'}} placeholder="Register" type={'submit'} />
            </form>
        </div>
    );
  };
  export default RegisterForm;