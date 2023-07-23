// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];


let categoriesTitle = [];
let questionAndAnswerArrow = [];
let categoriesID = [];
let newArray = [];
let arr = [];
const td = "";
const tr = "";
const body = document.body;



/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds()
{
  let categoriesIDSet = [];  
       
      /** Create 200 rows of data to pick out 5 category */

      try{
   
            for(i = 0; i<2; i++){
                const response = await axios.get('https://jservice.io/api/random?count=100');
                for(j = 0; j<100; j++){
                    categoriesIDSet.push(response.data[j]);
                }
            }
        }
       catch(e)
       {
         console.log(e)
       }
       
       return categoriesIDSet;

    
}

function setRandomCategory(category){

    let firstCheck = true;
    let categoryCount = 0;

    for(i=0; i<category.length; i++){
        try{
                 
               var randNum =  Math.floor(Math.random() * 199) + 0;
               if(firstCheck){
                 
                  categoriesID.push(category[randNum].category_id);
                  categoriesTitle.push(category[randNum].category.title);
                  arr[0][categoryCount] = category[randNum].category.title;
                  firstCheck = false
                  categoryCount++;
               }
               else{
                if(!(categoriesID.includes(category[randNum].category_id))&&categoryCount<6){
                    categoriesID.push(category[randNum].category_id);
                    arr[0][categoryCount] = category[randNum].category.title;
                    categoriesTitle.push(category[randNum].category.title);
                    categoryCount++;
                }
               }
           
             }
            catch(e){
            console.log(e)
           }
        }
}








/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory() {
  
    let x = 0; 
    for(i = 0; i<categoriesID.length; i++){
    
    let y = 1;
    try{
        
          
          let category = 'http://jservice.io/api/category?id=' + categoriesID[i];
          
          const response = await axios.get(category);
          
          for(j=0; j<5; j++){
            var randNum =  Math.floor(Math.random() * response.data.clues.length) + 0;
             arr[y][i] = response.data.clues[j];
             questionAndAnswerArrow.push(response.data.clues[j]);
            y++;
             }
        }
       catch(e)
       {
         console.log(e);
       }
  } 
}


/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
  
              
            
    
}
    
   
   
        



/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
    
    let locationstring = evt.target.getAttribute('index');
   
    
    var x = locationstring.split('-', 2);
    const x0 = x[0];
    const y0 = x[1];
    const attributeName =  document.getElementById(evt.target.getAttribute('index'));
    const viewStage = evt.target.name;
    console.log(viewStage);
     
    /*console.log(arr); */
   
    
    if(viewStage==='view'&&x0!=0){
     attributeName.innerText = arr[x0][y0].question;
     attributeName.name = "answer";
    }
    if(viewStage==="answer"){
     attributeName.innerText = arr[x0][y0].answer;
    
    }


    
   
    
   /* body.appendChild(x);*/
   

    
    

}


/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */
/*
function showLoadingView() {
    console.log("test5");

}
*/
/** Remove the loading spinner and update the button used to fetch data. */
/*

function hideLoadingView() {
    console.log("test6");
}

*/







/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    console.log("test 1");
      
    const m = 6;
    const n = 6;
    
     arr = new Array(m);
       for(i = 0; i<m; i++){
        arr[i] = new Array(n);
    }
    console.log("test 2");
    categories =  await getCategoryIds();
    console.log("test 3");
    setRandomCategory(categories);
    console.log("test 4");
    await getCategory();
   
    console.log("test 5")  
    
    tbl = document.createElement('table');
    tbl.id = "tableid";
    
    for (let i = 0; i < 6; i++) {
       const tr = tbl.insertRow();
       for (let j = 0; j < 6; j++) {
            const td = tr.insertCell();
            if(i===0)
            td.innerText = categoriesTitle[j];
            else 
              td.innerText = '?';
              console.log("test 6");
            
              td.addEventListener("click", handleClick);
              td.setAttribute('index',i+'-'+j);
              td.id = i+"-"+j;
              td.name = "view";
              
              
              
              
        }   
    }

    body.appendChild(tbl);
    restartButton();
       
}

function restartButton(){
    let restartButton = document.createElement("button");
    restartButton.id = "reestartbutton";
    restartButton.innerText = "Restart";
    restartButton.addEventListener('click', restartFunction);
    body.appendChild(restartButton);
   
}

function restartFunction(evt)
{
    evt.target.parentNode.remove();
    var scripts =  document.getElementsByTagName('script');
var torefreshs = ['myscript.js', 'myscript2.js'] ; // list of js to be refresh
var key = 1; // change this key every time you want force a refresh
for(var i=0;i<scripts.length;i++){ 
   for(var j=0;j<torefreshs.length;j++){ 
      if(scripts[i].src && (scripts[i].src.indexOf(torefreshs[j]) > -1)){
        new_src = scripts[i].src.replace(torefreshs[j],torefreshs[j] + 'k=' + key );
        scripts[i].src = new_src; // change src in order to refresh js
      } 
   }
}
    setupAndStart();

}
/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO
setupAndStart();