import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthState } from '../Context/AuthContext';
import { auth } from '../firebaseConfig';


 const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginstatus,setLoginstatus]=useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      signInWithEmailAndPassword(auth, email, password).then(()=>{
        // const authed=useAuthState()
        
        navigate("/messages");
      }).catch((error) =>{
        console.log(error)
        setLoginstatus(true)}
      );
    }
    onRegister();
  };

  return (
    
    <>
            <div className="vh-50 d-flex justify-content-center align-items-center ">
            <div className="col-md-4 p-5 shadow-sm border rounded-1 border- bg-white">
                <h2 className="text-center mb-4 text-primary" style={{fontFamily: 'Playfair Display, serif'}}>Login Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control border border-primary"  onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-4">
                        <label  className="form-label">Password</label>
                        <input type="password" className="form-control border border-primary" onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1"/>
                    </div>
                    {/* <p className="small"><a className="text-primary" href="forget-password.html">Forgot password?</a></p> */}
                   { loginstatus && <p className="small text-danger" >invalid credentials</p>}
                    <div className="d-grid ">
                        <button className="btn btn-primary" type="submit" >Login</button>
                    </div>
                </form>
                {/* <div className="mt-3">
                    <p className="mb-0  text-center">Don't have an account? <a href="signup.html"
                            className="text-primary fw-bold">Sign
                            Up</a></p>
                </div> */}
            </div>
        </div>
    </>
      )
}
export default Login;