/*
import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';


const Foodjokes = () => {
  const [display, setUsers] = useState([]);
  
   


  // async format
  const getData = async () => {
    
    const res = await fetch('http://localhost:3000/foodjoke');
    const data = await res.json();
    console.log(data);

    setUsers(new Array(data));
    
   


   
  };

  return (
    <div>
      <h1>Food Jokes</h1>
       
            
      <button onClick={getData}>Search</button>
      <div>
        {
        display.map((obj) => (
          <p>
            <div key={obj.text}>{obj.text}</div>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Foodjokes;


*/


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const CatSearch = (props) => {

  const [display, setUsers] = useState([]);


  const getData = async () => {
    
    const res = await fetch('http://localhost:3000/foodjoke');
    const data = await res.json();


    setUsers(new Array(data));
  }
     



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
        
    
        
             


    return  <div className = "catsearch">
      <body>
         <center><h1>Food Jokes</h1></center>
          
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
      
      <p>
      <button id = "JokeSelectButton" onClick={getData}>Jokes Search</button>
      </p>
     
      <div style={{ color: 'black', fontWeight: 'bold' }}>
        {
        display.map((obj) => (
            
            <div key={obj.text}>{obj.text}</div>
        
        ))}
     

      </div>
    
      </center>
    </body>
       
    </div>  
    
      
    
    
    
       
  


   
   
   
  
}
  

   

export default CatSearch





