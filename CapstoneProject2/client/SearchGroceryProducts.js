
/*
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const SearchGroceryProducts = (props) => {

    
  const [display, setUsers] = useState([]);
  const [display1, setProductmatches] = useState([]);
  
  
  const [query, setQuery] = useState([]);
  const [var1, setVar1] = useState([]);
  const [const1, setConst1] = useState([]);
  const [var2, setVar2] = useState([]);
  const [const2, setConst2] = useState([]);

  const[data, setData] = useState([]);
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
    const res = await fetch('http://localhost:3000/searchgroceryproducts' , {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method:"POST", 
        body: JSON.stringify({query: query, var1:var1, const1:const1, var2:var2, const2:const2})
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
    

        
    
        
             


    return <div>
    <div classname = "titleselection">
        <center><h1>Grocery Products Search</h1></center>
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

      <center>
      <p>
      <input id = "query"
                type = "text"
                value={query}
                placeholder="Enter your food"
                onChange={ev => setQuery(ev.target.value)}
                className={"RestaurantSearch"} />

      <input id = "var1"
                type = "text"
                value={var1}
                placeholder="Enter your first parameter"
                onChange={ev => setVar1(ev.target.value)}
                className={"RestaurantSearch"} />

       <input id = "const1"
                type = "text"
                value={const1}
                placeholder="Enter  your first value"
                onChange={ev => setConst1(ev.target.value)}
                className={"RestaurantSearch"} />

      <input id = "var2"
                type = "text"
                value={var2}
                placeholder="Enter your second para"
                onChange={ev => setVar2(ev.target.value)}
                className={"RestaurantSearch"} />

       <input id = "const2"
                type = "text"
                value={const2}
                placeholder="Enter  your second value"
                onChange={ev => setConst2(ev.target.value)}
                className={"RestaurantSearch"} />

       <button onClick={getData}>Search</button>
      
         
      </p>
      </center>
            
     
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
        </div>
    
    
    
       
  
</div>

*/


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const SearchGroceryProducts = (props) => {
    
  const [display, setProducts] = useState([]);
  const [display1, setProductmatches] = useState([]);
  
  
  const [query, setQuery] = useState([]);
  const [var1, setVar1] = useState([]);
  const [const1, setConst1] = useState([]);
  const [var2, setVar2] = useState([]);
  const [const2, setConst2] = useState([]);

  const[data, setData] = useState([]);
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
      const res = await fetch('http://localhost:3000/searchgroceryproducts' , {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method:"POST", 
          body: JSON.stringify({query: query, var1:var1, const1:const1, var2:var2, const2:const2})
        });
      
        const data = await res.json();
        console.log(data);
        
      
      
      const data1 = new Array(data.products);  
      const data2 = data1[0];
      console.log(data2.length);
      let groceryData = [];

    
      var i; 
      /*
      for(i=0; i<data2.length; i++){
          
          groceryData.push('-----------------------------------------------');
          groceryData.push("ID");
          groceryData.push(data2[i].id);
          console.log(data2[i].id);
          groceryData.push("Image");
          groceryData.push(data2[i].image);
          console.log(data2[i].image);
          groceryData.push("Title ");
          groceryData.push(data2[i].title)
     
       


      }*/
      setProducts(data2);
     
      
      };
             


    return <div className = "catsearch">
               <center><h1>Menu Selection</h1></center>
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
                           placeholder="Enter your food"
                           onChange={ev => setQuery(ev.target.value)}
                           className={"RestaurantSearch"} />

                   <input id = "var1"
                          type = "text"
                          value={var1}
                          placeholder="Enter your first parameter"
                          onChange={ev => setVar1(ev.target.value)}
                          className={"RestaurantSearch"} />

                   <input id = "const1"
                         type = "text"
                         value={const1}
                         placeholder="Enter  your first value"
                         onChange={ev => setConst1(ev.target.value)}
                         className={"RestaurantSearch"} />

                   <input id = "var2"
                          type = "text"
                         value={var2}
                        placeholder="Enter your second para"
                         onChange={ev => setVar2(ev.target.value)}
                         className={"RestaurantSearch"} />

       <input id = "const2"
                type = "text"
                value={const2}
                placeholder="Enter  your second value"
                onChange={ev => setConst2(ev.target.value)}
                className={"RestaurantSearch"} />

       <button onClick={getData}>Search</button>
      
       {
        display.map((obj) => (
          
        <div>
           <p> 
               <p><label>"---------------------------------------------------------------------------------"</label></p>
               <label>ID</label>
               <div  style={{ color: 'red', fontWeight: 'bold' }}   key={obj.id}>{obj.id}</div>
               <label>Image</label>
               <div  style={{ color: 'red', fontWeight: 'bold' }}   key={obj.image}><img src={obj.image}/></div>
               <label>Title</label>
               <div  style={{ color: 'red', fontWeight: 'bold' }}   key={obj.title}>{obj.title}</div>

           </p>
        </div>
        ))}
         {
        display1.map((obj) => (
          
        <div>
          
        </div>
        ))}
      </p>
        </center>



      
    
    
    
     
  
</div>

   
   
   
  
}
  

   

   

export default SearchGroceryProducts





 