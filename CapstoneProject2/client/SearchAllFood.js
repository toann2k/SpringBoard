/*


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const SearchAllFood = (props) => {

    const [display, setUsers] = useState([]);
  
    const [query, setQuery] = useState("")
    const [const1, setConst1] = useState("")
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
      const res = await fetch('http://localhost:3000/searchallfood' , {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method:"POST", 
          body: JSON.stringify({query: query, const1:const1})
        });
      
        const data = await res.json();
        console.log(data);
        
      
      
      const data1 = new Array(data.searchResults);  
      
  
  
  
      setUsers(data1[0][0].results);
    };
        
    
        
             


    return <div>
    <div classname = "titleselection">
        <center><h1>Search All Food</h1></center>
    </div>  
    <div align = "center" classname="buttonSelection">
       
        <div>
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
      </div>
      <div>
        <center><p>
          
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
      </p></center>
      </div>
      </div>
      <center>
      <div>
        {
        display.map((obj) => (
          
        <div>
          <p>
          <label>"----------------------------------------------------------------------------------------------------"</label>
          <div key={obj.id}><label>ID : </label>{obj.id}</div>
          <div key={obj.image}><label>Image : </label><a href={obj.image}>{obj.image}</a></div>
          <div key={obj.link}><label>Link : </label><a href={obj.link}>{obj.link}</a></div>
          <div key={obj.name}><label>Name : </label>{obj.name}</div>
          </p>
          
          
        
         
        </div>
       
        ))}
       
      </div>
      </center>
        
    
    
    
       
  
</div>

   
   
   
  
}
  

   

export default SearchAllFood

*/
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchAllFood = (props) => {

    
  const [display, setUsers] = useState([]);
  
  const [query, setQuery] = useState("")
  const [const1, setConst1] = useState("")


 

    const[data, setData] = useState([])


    const navigate = useNavigate();
    

    function onButtonClick(event) {

        if(event.currentTarget.value=='Food Jokes')
             navigate("/Foodjokes")
        else if(event.currentTarget.value=='Food Suggestions')
             navigate("/FoodSuggestion")
        else if(event.currentTarget.value=='Wine Pairing')
             navigate("/WinePairing")
        else if(event.currentTarget.value=='Search All Food')
             navigate("/SearchAllFood")
        else if(event.currentTarget.value=='Search Grocery Prod')
             navigate("/SearchGroceryProducts")
        else if(event.currentTarget.value=='Restaurant Search')
             navigate("/RestaurantsSearch")
          
        

     

    }

    const getData = async () => {
      const res = await fetch('http://localhost:3000/searchallfood' , {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method:"POST", 
          body: JSON.stringify({query: query, const1:const1})
        });
      
        const data = await res.json();
        

        
      
      
      const data1 = new Array(data.searchResults);  
      
  
  
  
      setUsers(data1[0][0].results);
    };
        
    


    return <div className = "catsearch">
               <center><h1></h1></center>
              <center>
                <p>
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
                </p>
                <p>
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
      </p>
      <p>
      {
        display.map((obj) => (
          
        <div>
          <p>
          <label>"----------------------------------------------------------------------------------------------------"</label>
          <div key={obj.id}><label>ID : </label>{obj.id}</div>
          <div key={obj.image}><label>Image : </label><p><img src={obj.image}/></p></div>
          <div key={obj.link}><label>Link : </label><a href={obj.link}>{obj.link}</a></div>
          <div key={obj.name}><label>Name : </label>{obj.name}</div>
          </p>
          
          
        
         
        </div>
       
        ))}
      </p>
        </center>

  
</div>

 
}
  

   

export default SearchAllFood







 