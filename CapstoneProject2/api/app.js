
const express = require("express")


var cors = require('cors')
const {Client} = require("pg");

// Initialize Express app
const app = express()

const {Pool} = require('pg');

//Connect to the database 

// Set up CORS and JSON middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setup Hashthe password
var md5 = require('md5');



/*db.connect(); */

const pool = new Pool({
  
  user: 'toan2k', 
  host: '127.0.0.1', 
  database: 'my_db1', 
  password: 'Gil009!',
  connectionLimit: 4,
  port: 5432
});



let success = [{
  "Result" : "Success" 
 },
{
  "Result": "Fail" 
 
}]


app.get("/", function(req, res, next) {
  res.send("API is working properly test");
});

app.get("/display", function(req, res, next) {
  res.send(person);
});

app.get("/foodjoke", (req, res) =>{ 
  
  const url = 'https://api.spoonacular.com/food/jokes/random?apiKey=848c95eb702f467f9b7a547878b8ec5d'
  fetch(url)
   .then(response =>  response.json())
   .then(json => res.send(json))
})


app.post("/foodsuggestion", (req, res) => {
  
 
  const query = req.body.query;
  const const1 = req.body.const1;

  const url = 'https://api.spoonacular.com/food/menuItems/suggest?query=' + query + '&number=' + const1 + '&apiKey=848c95eb702f467f9b7a547878b8ec5d'
  console.log(url);
  fetch(url)
  .then(response =>  response.json())
  .then(json => res.send(json))

})


app.post("/searchallfood", (req, res) => {
  

  const query = req.body.query;
  const const1 = req.body.const1;

  const url = 'https://api.spoonacular.com/food/search?query=' + query + '&number=' + const1 + '&apiKey=848c95eb702f467f9b7a547878b8ec5d'
  console.log(url);
  fetch(url)
  .then(response =>  response.json())
  .then(json => res.send(json))

})

app.post("/winepairing", (req, res) => {
  
  console.log("Test wind");
  const query = req.body.query;
  const const1 = req.body.const1;
  

  const url = 'https://api.spoonacular.com/food/wine/pairing?food=' + query + '&maxPrice=' + const1 + '&apiKey=848c95eb702f467f9b7a547878b8ec5d'
  console.log(url);
  fetch(url)
  .then(response =>  response.json())
  .then(json => res.send(json))

})


app.post("/searchgroceryproducts", (req, res) => {
  

  const query = req.body.query;
  const var1 = req.body.var1;
  const const1 = req.body.const1;
  const var2 = req.body.var2;
  const const2 = req.body.const2;

  

  const url = 'https://api.spoonacular.com/food/products/search?query=' + query + '&' + var1 + "=" + const1 + '&' + var2 + "=" + const2 +  '&apiKey=848c95eb702f467f9b7a547878b8ec5d'
  console.log(url);
  fetch(url)
  .then(response =>  response.json())
  .then(json => res.send(json))

})


app.post("/restaurantsearch", (req, res) => {
  
  

  var urlstring = 'https://api.spoonacular.com/food/restaurants/search?';
  const query = req.body.query;
  const lat = req.body.lat;
  const lng = req.body.lng;
  const dis = req.body.distance;
  const bud = req.body.budget;
 

  if(query!='N/A')
      urlstring = urlstring + 'query=' + query;
  if(lat!='N/A')
      if(query=='N/A')
          urlstring = urlstring + 'lat=' + lat;
      else 
          urlstring = urlstring + '&lat=' + lat;
  if(lng!='N/A')
      urlstring = urlstring + '&lng=' + lng;
  if(dis!='N/A')
      urlstring = urlstring + '&distance=' + dis;
  if(bud!='N/A')
      urlstring = urlstring + '&budget=' + bud;
 


  urlstring = urlstring + '&apiKey=848c95eb702f467f9b7a547878b8ec5d'
      
/** 
 * https://api.spoonacular.com/food/restaurants/search?lat=34.7786357&lng=122.3918135&apiKey=848c95eb702f467f9b7a547878b8ec5d
 * https://api.spoonacular.com/food/restaurants/search?cuisine=italian&lat=34.7786357&lng=-122.3918135&apiKey=848c95eb702f467f9b7a547878b8ec5d
 * 
 */

  

  console.log(urlstring);
  fetch(urlstring)
  .then(response =>  response.json())
  .then(json => res.send(json))

})

/*

https://api.spoonacular.com/food/restaurants/search?lat=29.69732&lng=-95.76978&cuisine=italian&apiKey=848c95eb702f467f9b7a547878b8ec5d
https://api.spoonacular.com/food/restaurants/search?lat=29.6973&lng=95.76978&cuisine=italian&apiKey=848c95eb702f467f9b7a547878b8ec5d
*/







app.post("/receipt", (req, res) => {
 
     const query = req.body.query;
     const var1 = req.body.var1;
     const const1 = req.body.const1;
     const var2 = req.body.var2;
     const const2 = req.body.const1;
   



  const url = 'https://api.spoonacular.com/recipes/716429/information?apiKey=848c95eb702f467f9b7a547878b8ec5d&complexSearch?' + 'query=' + query + 
  '&' + var1 + '=' + const1 + '&' + var2 + '=' + const2;
  
  
  fetch(url)
  .then(response =>  response.json())
  .then(json => res.send(json))

  

 

})


app.post("/signup", async (req, res) => {

  

  try {

         console.log(req.body.firstname);
         console.log(req.body.lastname);
         console.log(req.body.email);
         console.log(md5(req.body.password));
         const client = await pool.connect();
         console.log(pool);
         console.log("test2");


    const results =  await client.query('INSERT INTO users(firstname, lastname, email, password) VALUES($1, $2, $3, $4) RETURNING *', 
    [req.body.firstname, req.body.lastname, req.body.email, md5(req.body.password)]);
    console.log(results);
    res.send(results.rows[0]);
    console.log("test3");
    client.release();
    

  }catch(err){
   
   
    res.send("Error " + err);
  }

});


app.post("/login", async (req, res) => {
 
  try {
    
         const hashloginpassword = md5(req.body.password);
         const client = await pool.connect();
         const results =  await client.query('SELECT password FROM users WHERE email = $1', [req.body.email]); 
         console.log(hashloginpassword);
         const password = results.rows;
         const dpassword = password[0].password;

         if(dpassword==hashloginpassword)
              
              res.send(success[0]);
         else 
          res.send(success[1]);                                                                     
         
         client.release();
    

  }catch(err){
   
   
    res.send("Error " + err);
  }

});










module.exports = app;