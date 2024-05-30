import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  
  let navigate = useNavigate();


useEffect(()=>{
console.log(localStorage.getItem("email"));
console.log(localStorage.getItem("password"));
emailInputRef.current.value = localStorage.getItem("email")
passwordInputRef.current.value = localStorage.getItem("password")
if(localStorage.getItem("email") && localStorage.getItem("password")){
  valiadateLogin();   
}
},[])


let valiadateLogin = ()=>{
  if (
    emailInputRef.current.value == "govardhan@gmail.com" &&
    passwordInputRef.current.value == "govardhan"
  ) {
   localStorage.setItem("email", emailInputRef.current.value);
   localStorage.setItem("password", passwordInputRef.current.value);

   sessionStorage.setItem("email", emailInputRef.current.value);
   sessionStorage.setItem("password", passwordInputRef.current.value);



    navigate("/dashboard");
  } else {
    alert("Email or Password is Incorrect");
  }

}


  return (
    <div className="App">
      <form style={{boxShadow:"2px 2px 2px grey"}}>
        <div className="loginDiv">
          <h1 style={{color:" rgb(255, 0, 119)",textShadow:"1px 1px 1px grey"}}>Sign In</h1>
          <div>
            <label></label>
            <input
              type="email"
              placeHolder="Enter Your Email"
              ref={emailInputRef}
            ></input>
          </div>
          <div>
            <label></label>
            <input
              type="password"
              placeholder="Enter Your Password"
              ref={passwordInputRef}
            ></input>
          </div>
         
          <div>
            <button
              type="button"
              onClick={() => {
                valiadateLogin()
              }}
            >
              Login
            </button>
          </div>
          <div className="signUp">
            <Link to="/signup"  style={{textDecoration:"none", color:"white"}}>
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
