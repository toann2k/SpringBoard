/*

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const RestaurantsSearch = (props) => {

    
  const [display, setAddress] = useState([]);
  const [display1, setZipCode] = useState([]);
  
  
  const [query, setQuery] = useState([]);
  const [lat, setlat] = useState([]);
  const [lng, setlng] = useState([]);
  const [distance, setdistance] = useState([]);
  const [budget, setbudget] = useState([]);
  const [cuisine, setcuisine] = useState([]);
  

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
      console.log(data1);

      let address = [];
      let city = [];
      let state = [];
      let zipcode = [];
    
      var i; 
      
      for(i=0; i<data1.length; i++){
          address.push('-----------------------------------------------');
          address.push("Address");
          address.push(data1[i].name);
          address.push(data1[i].address.street_addr);
          address.push(data1[i].address.city + ',' + data1[i].address.state + ' ' + data1[i].address.zipcode);
          address.push("Hours Operation");
          address.push('Monday :' + data1[i].local_hours.dine_in.Monday);
          address.push('Tuesday :' + data1[i].local_hours.dine_in.Tuesday);
          address.push('Wednesday :' + data1[i].local_hours.dine_in.Wednesday);
          address.push('Thursday :' + data1[i].local_hours.dine_in.Thursday);
          address.push('Friday :' + data1[i].local_hours.dine_in.Friday);
          address.push('Saturday :' + data1[i].local_hours.dine_in.Saturday);
          address.push('Sunday :' + data1[i].local_hours.dine_in.Sunday);
       
         

          
          

      }
    
      
      setAddress(address);
      setZipCode(zipcode);
   
        


    }

    
        
    
        
             


    return <div>
    <div classname = "titleselection">
        <center><h1>Restaurant Search</h1></center>
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
      <p>
      <lable>If Not apply type in N/A</lable>
      </p>
      <input id = "query"
                type = "text"
                value={query}
                placeholder="Enter food query"
                onChange={ev => setQuery(ev.target.value)}
                className={"RestaurantSearch"} />
     
        <input id = "lat"
                type = "text"
                value={lat}
                placeholder="Enter your lat"
                onChange={ev => setlat(ev.target.value)}
                className={"RestaurantSearch"} />
      
        <input id = "lng"
                type = "text"
                value={lng}
                placeholder="Enter your lng"
                onChange={ev => setlng(ev.target.value)}
                className={"RestaurantSearch"} />
       
        <input id = "distance"
                type = "text"
                value={distance}
                placeholder="Enter your distance"
                onChange={ev => setdistance(ev.target.value)}
                className={"RestaurantSearch"} />

        <input id = "budget"
                type = "text"
                value={budget}
                placeholder="Enter your budget"
                onChange={ev => setbudget(ev.target.value)}
                className={"RestaurantSearch"} />
        <input id = "cuisine"
                type = "text"
                value={cuisine}
                placeholder="Enter your cuisine"
                onChange={ev => setcuisine(ev.target.value)}
                className={"RestaurantSearch"} />
        
           
           
            
      <button onClick={getData}>Search</button>
      <div>
        {
        display.map((obj) => (
          
        <div>
           <p>
              <center>
              <div key={obj}>{obj}</div>
              </center>
            
            </p>
        </div>
        
        ))}
       
      </div>

    </div>
   
        </div>
    
    
    
       
  
</div>

   
   
   
  
}
  

   

export default  RestaurantsSearch


*/


 
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const RestaurantSearch = (props) => {

    
  const [display, setAddress] = useState([]);
  const [display1, setZipCode] = useState([]);
  
  
  const [query, setQuery] = useState([]);
  const [lat, setlat] = useState([]);
  const [lng, setlng] = useState([]);
  const [distance, setdistance] = useState([]);
  const [budget, setbudget] = useState([]);
  const [cuisine, setcuisine] = useState([]);
  

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
      const res = await fetch('http://localhost:3000/restaurantsearch' , {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method:"POST", 
          body: JSON.stringify({query: query, lat:lat, lng:lng, distance:distance, budget:budget})
        });
  
  
        const data = await res.json();
        const data1 = data.restaurants;
      
  
        let address = [];
        let city = [];
        let state = [];
        let zipcode = [];
      
        var i; 
        
        for(i=0; i<data1.length; i++){
            address.push('-----------------------------------------------');
            address.push("Address");
            address.push(data1[i].name);
            address.push(data1[i].address.street_addr);
            address.push(data1[i].address.city + ',' + data1[i].address.state + ' ' + data1[i].address.zipcode);
            address.push("Hours Operation");
            address.push('Monday :' + data1[i].local_hours.dine_in.Monday);
            address.push('Tuesday :' + data1[i].local_hours.dine_in.Tuesday);
            address.push('Wednesday :' + data1[i].local_hours.dine_in.Wednesday);
            address.push('Thursday :' + data1[i].local_hours.dine_in.Thursday);
            address.push('Friday :' + data1[i].local_hours.dine_in.Friday);
            address.push('Saturday :' + data1[i].local_hours.dine_in.Saturday);
            address.push('Sunday :' + data1[i].local_hours.dine_in.Sunday);
  
  
        }
        setAddress(address);
        setZipCode(zipcode);
      }
      
               


    return <div className = "catsearch1">
              <body>
               <center><h1>Restaurant Search</h1>
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
      <label>If Not apply type in N/A</label>
      </p>
      <input id = "query"
                type = "text"
                value={query}
                placeholder="Enter food query"
                onChange={ev => setQuery(ev.target.value)}
                className={"RestaurantSearch"} />
     
        <input id = "lat"
                type = "text"
                value={lat}
                placeholder="Enter your lat"
                onChange={ev => setlat(ev.target.value)}
                className={"RestaurantSearch"} />
      
        <input id = "lng"
                type = "text"
                value={lng}
                placeholder="Enter your lng"
                onChange={ev => setlng(ev.target.value)}
                className={"RestaurantSearch"} />
       
        <input id = "distance"
                type = "text"
                value={distance}
                placeholder="Enter your distance"
                onChange={ev => setdistance(ev.target.value)}
                className={"RestaurantSearch"} />

        <input id = "budget"
                type = "text"
                value={budget}
                placeholder="Enter your budget"
                onChange={ev => setbudget(ev.target.value)}
                className={"RestaurantSearch"} />
       
      
            
      <button onClick={getData}>Search</button>
        </center>
        {
        display.map((obj) => (
          
      
           <p>
              <center>
              <div  style={{ color: 'red', fontWeight: 'bold' }}   key={obj}>{obj}</div>
              </center>
            
            </p>
        
        
        ))}
        </body>

      
    
    
    
     
  
</div>

   
   
   
  
}
  

   

export default RestaurantSearch
