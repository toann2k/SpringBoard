document.addEventListener("DOMContentLoaded", function() 
{
    let countFlag = 0;
    let enterForm = document.getElementById("enterForm");
    let displaywindow = document.getElementById("displaywindow");
    
    enterForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if(countFlag==0)
    {
        let removeButton = document.createElement("button");
        removeButton.id = "button1";
        removeButton.innerText = "Remove";
        removeButton.type = "image";
        
        
        let imglist = document.createElement("img");
        imglist.id = "image1";
        imglist.src = document.getElementById("task").value;
          
        let topPar = document.createElement("p");
        topPar.id = "top1";

        let bottomPar = document.createElement("p");
        bottomPar.id = "bottom1"
        
        topPar.innerText = document.getElementById("topmessage1").value; 
        bottomPar.innerText = document.getElementById("bottommessage1").value;
              
        let newdisplay = document.createElement("table");
        
        displaywindow.appendChild(newdisplay);
        newdisplay.appendChild(imglist);
        newdisplay.appendChild(removeButton); 
        newdisplay.appendChild(topPar); 
        newdisplay.appendChild(bottomPar);
     
       countFlag++;

    }
    else
    {
        let removeButton = document.createElement("button");
        removeButton.id = "button2";
        removeButton.innerText = "Remove";
        removeButton.type = "image";
        
        
        let imglist = document.createElement("img")
        imglist.id = "image2";
        imglist.src = document.getElementById("task").value;
               
    
        let newdisplay = document.createElement("table");
       
        let topPar = document.createElement("p");
        topPar.id = "top2";

        let bottomPar = document.createElement("p");
        bottomPar.id = "bottom2"
        
        topPar.innerText = document.getElementById("topmessage1").value; 
        bottomPar.innerText = document.getElementById("bottommessage1").value;

        
        displaywindow.appendChild(newdisplay);
        newdisplay.appendChild(imglist);
        newdisplay.appendChild(removeButton);
        newdisplay.appendChild(topPar); 
        newdisplay.appendChild(bottomPar);

        countFlag++;

    }
    enterForm.reset();
});
displaywindow.addEventListener("click", function(event) 
{
    const targetTagToLowerCase = event.target.tagName.toLowerCase();
   
    if (targetTagToLowerCase === "button") 
    {
            if(event.target.id=="button1")
                  countFlag = 0;
                        else
               countFlag = 1;
           event.target.parentNode.remove();
        }
    
});
});
