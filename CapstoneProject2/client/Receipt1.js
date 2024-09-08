import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';


const Receipt1 = () => {
  const [display, setUsers] = useState([]);
  
  const [query, setQuery] = useState([]);
  const [var1, setVar1] = useState([])
  const [const1, setConst1] = useState([])
  const [var2, setVar2] = useState([])
  const [const2, setConst2] = useState([]) 
  var data6 = [];

  

  // make a utility function to get data
  // const getData = () => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // };

  // async format
  const getData = async () => {
    const res = await fetch('http://localhost:3000/receipt' , {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:"POST", 
      body: JSON.stringify({query: query, var1:var1, const1:const1, var2:var2, const2:const2})
    });
  
    const data = await res.json();
    console.log(data);
    
    const data1 = Object.values(data);
    const data2 = data1.extendedIngredients;

    console.log(data2);
    

    const data3 = Object.entries(data2);
    const data4 = data3[2][1];
    console.log(new Array(data2));


/*
    data1.forEach(([key, value]) => {
      console.log(key);
      console.log(value);
      
    });*/
    setUsers(new Array(data4));
  };

  return (
    <div>
      <h1>Receipt Look Up</h1>
      <input id = "query"
                type = "text"
                value={query}
                placeholder="Enter your query string"
                onChange={ev => setQuery(ev.target.value)}
                className={"receiptinputBox"} />
            <input id = "var1"
               type = "text"
               value = {var1}
               placeholder = "Enter your first param"
               onChange={ev => setVar1(ev.target.value)}
               className={"receiptinputBox"} />   
           <input id = "const1"
                type = "text"
                value={const1}
                placeholder="Enter your first const"
                onChange={ev => setConst1(ev.target.value)}
                className={"receiptinputBox"} />
            <input id = "var2"
               type = "text"
               value = {var2}
               placeholder = "Enter your second param"
               onChange={ev => setVar2(ev.target.value)}
               className={"receiptinputBox"} />
             <input id = "const2"
               type = "text"
               value = {const2}
               placeholder = "Enter your second const"
               onChange={ev => setConst2(ev.target.value)}
               className={"receiptinputBox"} />
            
      <button onClick={getData}>Search</button>
      <div>
        {
        display.map((obj) => (
          <div key={obj.aisle}>{obj.aisle}</div>
        ))}
      </div>
    </div>
  );
};

export default Receipt1;
