import React from "react"
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate();
    
    const loginButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
        } else {
            navigate("/login")
        }
    }

    const regButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
        } else {
            navigate("/reg")
        }
    }


    return <div className="mainContainer">
        <div className={"titleContainer"}>
            <div>Welcome!</div>
        </div>
        <div>
            This is the home page.
        </div>
        <div className={"buttonContainer"}>
            <input
                className={"loginWindow"}
                type="button"
                onClick={loginButtonClick}
                value={"Login"} />
                  
            
            
        
        
            <input
                className={"loginWindow"}
                type="button"
                onClick={regButtonClick}
                value={"Sign Up"} />
                  
            
           
        </div>
       


    </div>
}

export default Home