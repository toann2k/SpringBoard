
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const CatSearch = (props) => {

    
    const [firstCat, setFirstCat] = useState("")
    const [firstMin, setFirstMin] = useState("")
    const [firstMax, setFirstMax] = useState("")
    const [secondCat, setSecondCat] = useState("")
    const [secondMin, setSecondMin] = useState("")
    const [secondMax, setSecondMax] = useState("")


    const[data, setData] = useState([])


    const navigate = useNavigate();
    

    function onButtonClick(event) {

        if(event.currentTarget.value=='Food Jokes')
        { 
            
            

           
            
            navigate("/Foodjokes")
          
        }
        else if(event.currentTarget.value=='Food Suggestions')
        {
           navigate("/FoodSuggestion")
        
        }
        else if(event.currentTarget.value=='Wine Pairing')
        {
           navigate("/WinePairing")

          
        }
        else if(event.currentTarget.value=='Search All Food')
        {
           navigate("/SearchAllFood")
          
        }
        else if(event.currentTarget.value=='Search Grocery Prod')
        {
           navigate("/SearchGroceryProducts")
          
        }
        else if(event.currentTarget.value=='Restaurant Search')
        {
           navigate("/RestaurantsSearch")
          
        }


         
        
        
        

    }
    
        
    
             


    return <div className = "catsearch">
               <center><h1>Menu Selection</h1></center>
              <center>
                 <input id = {"food"}
                    className={"MenuSelectButton"}
                    type="button"
                    onClick={onButtonClick}
                    value={"Food Jokes"} />
                <input
                    className={"MenuSelectButton"}
                    type="button"
                    onClick={onButtonClick}
                    value={"Food Suggestions"} />
                <input
                    className={"MenuSelectButton"}
                    type="button"
                    onClick={onButtonClick}
                    value={"Wine Pairing"} />
       
                <input
                    className={"MenuSelectButton"}
                    type="button"
                    onClick={onButtonClick}
                    value={"Search All Food"} />
      
                <input
                   className={"MenuSelectButton"}
                   type="button"
                   onClick={onButtonClick}
                   value={"Search Grocery Prod"} />
        
        
                 <input
                     className={"MenuSelectButton"}
                     type="button"
                     onClick={onButtonClick}
                     value={"Restaurant Search"} />
        </center>

      
    
    
    
     
  
</div>

   
   
   
  
}
  

   

export default CatSearch




