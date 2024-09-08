import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




const Reg = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")




    const[data, setData] = useState([])


    const navigate = useNavigate();
    

        
    const onButtonClick = () => {
       

        // Set initial error values to empty
        setFirstNameError("")
        setLastNameError("")
        setEmailError("")
        setPasswordError("")


     
    
}
/*
const res = await fetch('http://localhost:3000/restaurantsearch' , {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method:"POST", 
          body: JSON.stringify({query: query, lat:lat, lng:lng, distance:distance, budget:budget, cuisine:cuisine})
        });
  
  
        const data = await res.json();
        const data1 = data.restaurants;


*/

const getData = async () => {
    

    const res = await fetch('http://localhost:3000/signup', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method:"POST", 
          body: JSON.stringify({firstname: firstName, lastname:lastName, email:email, password:password})
    });
  

    /*alert("Register Success")*/

    
    navigate("/Login");

    
  };
      

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div><h4>Register Window</h4></div>
        </div>
        <br />
        <label>Enter your first name</label>
            <input
                value={firstName}
                placeholder="Enter your First Name"
                onChange={ev => setFirstName(ev.target.value)}
                className={"reginputBox"} />
            <label className="errorLabel">{firstNameError}</label>
       
           <br />
        <label>Enter your last name</label>
             <input
                value={lastName}
                placeholder="Enter your Last Name"
                onChange={ev => setLastName(ev.target.value)}
                className={"reginputBox"}/>
            <label className="errorLabel">{lastNameError}</label>
       
        <br />
       
        <label>Enter your email</label>
            <input
                value={email}
                placeholder="Enter your email here"
                onChange={ev => setEmail(ev.target.value)}
                className={"reginputBox"} />
            <label className="errorLabel">{emailError}</label>
        
        <br />
        <label>Enter your password</label>
            <input type = "password"
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"reginputBox"}  />
            <label className="errorLabel">{passwordError}</label>
       
        <br />
        <button onClick={getData}>Register</button>
    </div>
}


export default Reg