import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Grocery = (props) => {
    const [query, setQuery] = useState("")
    const [var1, setVar1] = useState("")
    const [var2, setVar2] = useState("")
    const [var3, setVar3] = useState("")
    const [queryError, setqueryError] = useState("")
    const [varOneError, setVar1Error] = useState("")
    const [varTwoError, setVar2Error] = useState("")
    const [varThreeError, setVar3Error] = useState("")
    
    
    
    const navigate = useNavigate();
        
    
    

    function onButtonClick(event) {
         useEffect()

        /* 

        

       <div classname="buttonSelection">
       
          <bk />
          
              
          <div>
               <input
                value={query}
                placeholder="Enter your query"
                onChange={ev => setQuery(ev.target.value)}
                className={"inputBox1"} />
            <label className="errorLabel">{queryError}</label>
            </div>
            <div>
            <input
                value={var1}
                placeholder="Enter Variable 1"
                onChange={ev => setVar1(ev.target.value)}
                className={"inputBox1"} />
            <label className="errorLabel">{varOneError}</label>
            </div>
            <div>
            <input
                value={var2}
                placeholder="Enter Varible 2"
                onChange={ev => setVar2(ev.target.value)}
                className={"inputBox1"} />
                <label className="errorLabel">{varTwoError}</label>
            </div>
            <div>
            <input
                value={var3}
                placeholder="Enter Varible 3"
                onChange={ev => setVar3(ev.target.value)}
                className={"inputBox1"} />   
                <label className="errorLabel">{varThreeError}</label>
            </div>
            </div>

     
        
        */
        

    }
        
    
        
             
    


const convertAmount = () => {
}

return <div classname = "MenuSelection">
           <div classname = "ButtonMenu">
           <input
               className={"inputButton"}
               type="button"
               onClick={onButtonClick}
               value={"RECEIPT SEARCH"} />
               </div>
             
            <div classname = "ButtonMenu">
           <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"INGREDIENTS SEARCH"} />
                </div>
            <div classname = "ButtonMenu">
            <input
                 className={"inputButton"}
                 type="button"
                 onClick={onButtonClick}
                 value={"GROCERY PRODCUCT"} />
                 </div>
            <div classname = "ButtonMenu">
            <input
                 className={"inputButton"}
                 type="button"
                 onClick={onButtonClick}
                 value={"SEARCH INGREDIENTS"} />
            </div>


          <div classname = "ButtonMenu1"> 
          <input
                type = "text"
                value={query}
                placeholder="Enter your grocery query"
                onChange={ev => setQuery(ev.target.value)}
                className={"inputBox"} />
           <input
               type = "text"
               value = {var1}
               placeholder = "Enter your first parameter"
               onChange={ev => setVar1(ev.target.value)}
               className={"inputBox"} />
            
            <input
               type = "text"
               value = {var2}
               placeholder = "Enter your second parameter"
               onChange={ev => setVar2(ev.target.value)}
               className={"inputBox"} />
            
            <input
               type = "text"
               value = {var3}
               placeholder = "Enter your third parameter"
               onChange={ev => setVar3(ev.target.value)}
               className={"inputBox"} />
            </div>

           <div classname = "ButtonMenu">
           <input
            className={"inputButton"}
            type="button1"
            onClick={onButtonClick}
            value={"SEARCH"} />
          </div>
          </div>
          
          
} 

          
export default Grocery

            
    