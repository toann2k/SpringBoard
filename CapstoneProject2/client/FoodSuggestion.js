 

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const FoodSuggestion = (props) => {

    
  const [display, setUsers] = useState([]);
  
  const [query, setQuery] = useState([]);
 
  const [const1, setConst1] = useState([])
  

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

    const getData = async () => {
      const res = await fetch('http://localhost:3000/foodsuggestion' , {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method:"POST", 
          body: JSON.stringify({query: query, const1:const1})
        });
      
        const data = await res.json();
        
      
      const data1 = new Array(data);  
      console.log(data1);
          
          
  
  
      
      setUsers(data1[0].results);
    };
        
    
        
             


    return <div  className = "catsearch">
              <center><h1>Food Suggestion</h1></center>
              <center>
              <input
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

   
     
     <div>
      <p>
     <center>
      <input id = "query"
                type = "text"
                value={query}
                placeholder="Enter your query string"
                onChange={ev => setQuery(ev.target.value)}
                className={"receiptinputBox"} />
         
           <input id = "const1"
                type = "text"
                value={const1}
                placeholder="# of display result"
                onChange={ev => setConst1(ev.target.value)}
                className={"receiptinputBox"} />
           
            
      <button onClick={getData}>Search</button>
      <div>
        {
        display.map((obj) => (
          
        <div>
          <label>"--------------------------------------------------------------------------------------"</label>
          <div key={obj.id}><label>ID : </label>{obj.id}</div>
          <div key={obj.title}><label>Title : </label>{obj.title}</div>
     
        
         
        </div>
        ))}
      </div>
      </center>
      </p>
      </div>
      
     
       
  
</div>


   
   
   
  
}
  

   

export default FoodSuggestion




