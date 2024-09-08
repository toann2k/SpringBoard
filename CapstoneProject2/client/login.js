import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
    
    const navigate = useNavigate();
        


    const getData = async () => {
        const res = await fetch('http://localhost:3000/login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method:"POST", 
              body: JSON.stringify({email: email, password:password})
        });
           
        
        const testText = await res.json();
        const testResult = testText.Result;
        console.log(testResult);

        
      
        if(testResult=="Success"){
               alert("Login Success");
               navigate("/CatSearch");
        }
        else if(testResult=="Fail"){
            alert("Username or Email is wrong");
             navigate("/login");
        }
        else{
            alert("Username or Email is wrong");
            navigate("/login");
        }
           
            
           
           
    
        
      };

      const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
          


    return <div className={"mainContainer"}>
                   <div><h1>Welcome To Food Page</h1></div>
      
        <br />
        <label>Please enter your username</label>
       
            <input
                value={email}
                placeholder="Enter your email here"
                onChange={ev => setEmail(ev.target.value)}
                className={"reginputBox"}  />
            
     
        <br />
        <label>Enter your password</label>
        
            <input type = "password"
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"reginputBox"}  />
          
      
        <br />
        <button onClick={getData}>Log In</button>
       
    </div>
}

export default Login