const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
let displayDIV, DIVlist, i;
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    let results = [];
		let fruitString = '';
    
    for(i = 0; i<fruit.length; i++){
         fruitString = fruit[i];
		     if(fruitString.toUpperCase().includes(str.toUpperCase())){
		         results.push(fruitString);
		        }
	      }        
      return results; 
}

function searchHandler(e) {
 
	input.addEventListener("input", function(e){
     let inputString = document.getElementById("fruit").value
     let resultArray = search(inputString);
     showSuggestions(resultArray,inputString);
    });
}

function showSuggestions(results, inputVal) {
   closeAllLists();
   displayDIV = document.createElement("DIV");
   displayDIV.setAttribute("id", this.id + "autocomplete-list");
   displayDIV.setAttribute("class", "autocomplete-items");
   suggestions.parentNode.appendChild(displayDIV);

  for (i = 0; i < results.length; i++) {
    
       if (results[i].toUpperCase().includes(inputVal.toUpperCase())) {
                 DIVlist = document.createElement("DIV");
                 DIVlist.innerHTML =  results[i];
                 DIVlist.innerHTML += "<input type='hidden' value='" + results[i] + "'>"; 
         useSuggestion();
         displayDIV.appendChild(DIVlist);
       }
     }
   
}

function useSuggestion(e) {
         DIVlist.addEventListener("click", function(e) {
             input.value = this.getElementsByTagName("input")[0].value;
             closeAllLists();
         });
}

function closeAllLists(elm) {
   
    var x = document.getElementsByClassName("autocomplete-items");

  
    for (var i = 0; i < x.length; i++) {
      if (elm != x[i] && elm != input) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}



input.addEventListener('keyup', searchHandler);
