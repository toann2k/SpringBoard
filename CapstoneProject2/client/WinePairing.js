/*


import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';


const WinePairing = () => {
  const [display, setUsers] = useState([]);
  const [display1, setProductmatches] = useState([]);
  
  
  const [query, setQuery] = useState([]);
 
  const [const1, setConst1] = useState([])
  



  const getData = async () => {
    const res = await fetch('http://localhost:3000/winepairing' , {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method:"POST", 
        body: JSON.stringify({query: query, const1:const1})
      });
    
      const data = await res.json();
      console.log(data);
      
    
    
    const data1 = new Array(data);  
    const data2 = new Array(data.productMatches)
    console.log(data1);    

    setUsers(data1);
    console.log(data2);
    setProductmatches(data2[0]);
    

   




  };

  return (
    <div>
      <h1>Wine Pairing</h1>
      <input id = "query"
                type = "text"
                value={query}
                placeholder="Enter your food"
                onChange={ev => setQuery(ev.target.value)}
                className={"receiptinputBox"} />
         
      <input id = "const1"
                type = "text"
                value={const1}
                placeholder="Max Price for the wine"
                onChange={ev => setConst1(ev.target.value)}
                className={"receiptinputBox"} />
           
            
      <button onClick={getData}>Search</button>
      <div>
        {
        display.map((obj) => (
          
        <div>
           <p>
              <div key={obj.pairingText}><label>Pairing Wine : </label>{obj.pairingText}</div>
              <div key={obj.productMatches.id}><label>Product Matches : </label><a href={obj.productMatches.id}>{obj.productMatches.id}</a></div>
           </p>
        </div>
        ))}
         {
        display1.map((obj) => (
          
        <div>
           <p>
              <div key={obj.id}><label>Wine ID : </label>{obj.id}</div>
              <div key={obj.title}><label>Wine Title : </label>{obj.title}</div>
              <div key={obj.description}><label>Wine Description : </label>{obj.description}</div>
              <div key={obj.price}><label>Wine Price : </label>{obj.price}</div>
              <div key={obj.imageUrl}><label>Wine Image : </label><a href={obj.imageUrl}>{obj.imageUrl}</a></div>
              <div key={obj.averageRating}><label>Wine Avg Rating : </label>{obj.averageRating}</div>
              <div key={obj.score}><label>Wine Score : </label>{obj.score}</div>
              <div key={obj.link}><label> Link : </label><a href={obj.link}>{obj.link}</a></div>
           </p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default WinePairing;

*/


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const WinePairing = (props) => {

    
   const [display, setUsers] = useState([]);
   const [display1, setProductmatches] = useState([]);
   
   
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
      const res = await fetch('http://localhost:3000/winepairing' , {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method:"POST", 
          body: JSON.stringify({query: query, const1:const1})
        });
      
        const data = await res.json();
     
        
      
      
      const data1 = new Array(data);  
      const data2 = new Array(data.productMatches)
      console.log(data1);    
  
      setUsers(data1);
      console.log(data2);
      setProductmatches(data2[0]);
      
  
       
    };
    
        
             


    return <div className = "catsearch">
               <center><h1>Wine Pairing</h1></center>
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
       
         <p>
            <input id = "query"
                type = "text"
                value={query}
                placeholder="Enter your food"
                onChange={ev => setQuery(ev.target.value)}
                className={"receiptinputBox"} />
         
            <input id = "const1"
                type = "text"
                value={const1}
                placeholder="Max Price for the wine"
                onChange={ev => setConst1(ev.target.value)}
                className={"receiptinputBox"} />
         </p>
           
            
      <button onClick={getData}>Search</button>
    
      {
        display1.map((obj) => (
          
        <div>
           <p>
              <div key={obj.id}><label>Wine ID : </label>{obj.id}</div>
              <div key={obj.title}><label>Wine Title : </label>{obj.title}</div>
              <div key={obj.description}><label>Wine Description : </label>{obj.description}</div>
              <div key={obj.price}><label>Wine Price : </label>{obj.price}</div>
              <div key={obj.imageUrl}><label>Wine Image : </label><p><img src={obj.imageUrl}/></p></div>
              <div key={obj.averageRating}><label>Wine Avg Rating : </label>{obj.averageRating}</div>
              <div key={obj.score}><label>Wine Score : </label>{obj.score}</div>
   
            /
         
           </p>
        </div>
        ))}
      </center>

      
    
    
    
     
  
</div>

   
   
   
  
}
  

   

export default WinePairing




   









 