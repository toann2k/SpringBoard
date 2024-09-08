
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Reg from './Reg';

import CatSearch from './CatSearch';
import Select from './SearchGroceryProducts';


/*import Menu from './Menu';*/
import Receipt1 from './Receipt1';
import Foodjokes from './Foodjokes';
import FoodSuggestion from './FoodSuggestion';
import SearchAllFood from './SearchAllFood';
import WinePairing from './WinePairing';
import SearchGroceryProducts from './SearchGroceryProducts';
import RestaurantsSearch from './RestaurantsSearch';


import './App.css';
import { useEffect, useState } from 'react';




function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    // Fetch the user email and token from local storage
    const user = JSON.parse(localStorage.getItem("user"))

    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.token) {
      setLoggedIn(false)
      return
    }

    // If the token exists, verify it with the auth server to see if it is valid
    fetch("http://localhost:3080/verify", {
            method: "POST",
            headers: {
                'jwt-token': user.token
              }
        })
        .then(r => r.json())
        .then(r => {
            setLoggedIn('success' === r.message)
            setEmail(user.email || "")
        })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/reg" element={<Reg setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
         
          <Route path="/CatSearch" element={<CatSearch setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/Select" element={<Select setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
       
 


          <Route path="/FoodSuggestion" element={<FoodSuggestion setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/Foodjokes" element={<Foodjokes setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/SearchAllFood" element={<SearchAllFood setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/WinePairing" element={<WinePairing setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/SearchGroceryProducts" element={<SearchGroceryProducts setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/RestaurantsSearch" element={<RestaurantsSearch setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
     
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;