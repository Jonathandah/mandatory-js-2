let turn = "x";
function addTile(e){
    if( turn === "x" && e.target.textContent === ""){
        e.target.textContent = "x";
        turn = "o";
    }
    
    else if (turn === "o" && e.target.textContent === ""){
        e.target.textContent ="o";
        turn = "x";
    }
  
    for(let i = 0; i<buttonTiles.length; i++){
        //windconditions behöver fixa ett sätt att breake när en spelare vinner.
        if(buttonTiles[0].textContent==="x" && buttonTiles[1].textContent==="x" && buttonTiles[2].textContent==="x" || buttonTiles[0].textContent==="o" && buttonTiles[1].textContent==="o" && buttonTiles[2].textContent==="o" ){
            if(buttonTiles[0].textContent ==="x"){
                console.log("X won");
            }
            else{
                console.log("O won");
            }
        }
        else if(buttonTiles[3].textContent==="x" && buttonTiles[4].textContent==="x" && buttonTiles[5].textContent==="x" || buttonTiles[3].textContent==="o" && buttonTiles[4].textContent==="o" && buttonTiles[5].textContent==="o" ){
            if(buttonTiles[3].textContent ==="x"){
                console.log("X won");
            }
            else{
                console.log("O won");
            }
        }
        else if(buttonTiles[6].textContent==="x" && buttonTiles[7].textContent==="x" && buttonTiles[8].textContent==="x" || buttonTiles[6].textContent==="o" && buttonTiles[7].textContent==="o" && buttonTiles[8].textContent==="o" ){
            if(buttonTiles[6].textContent ==="x"){
                console.log("X won");
            }
            else{
                console.log("O won");
            }
        }
        else if(buttonTiles[0].textContent==="x" && buttonTiles[3].textContent==="x" && buttonTiles[6].textContent==="x" || buttonTiles[0].textContent==="o" && buttonTiles[3].textContent==="o" && buttonTiles[6].textContent==="o" ){
            if(buttonTiles[0].textContent ==="x"){
                console.log("X won");
            }
            else{
                console.log("O won");
            }
        }
        else if(buttonTiles[1].textContent==="x" && buttonTiles[4].textContent==="x" && buttonTiles[7].textContent==="x" || buttonTiles[1].textContent==="o" && buttonTiles[4].textContent==="o" && buttonTiles[7].textContent==="o" ){
            if(buttonTiles[1].textContent ==="x"){
                console.log("X won");
            }
            else{
                console.log("O won");
            }
        }
        else if(buttonTiles[2].textContent==="x" && buttonTiles[5].textContent==="x" && buttonTiles[8].textContent==="x" || buttonTiles[2].textContent==="o" && buttonTiles[5].textContent==="o" && buttonTiles[8].textContent==="o" ){
            if(buttonTiles[2].textContent ==="x"){
                console.log("X won");
            }
            else{
                console.log("O won");
            }
        }
        else if(buttonTiles[0].textContent==="x" && buttonTiles[4].textContent==="x" && buttonTiles[8].textContent==="x" || buttonTiles[0].textContent==="o" && buttonTiles[4].textContent==="o" && buttonTiles[8].textContent==="o" ){
            if(buttonTiles[0].textContent ==="x"){
                console.log("X won");
            }
            else{
                console.log("O won");
            }
        }
        else if(buttonTiles[2].textContent==="x" && buttonTiles[4].textContent==="x" && buttonTiles[6].textContent==="x" || buttonTiles[2].textContent==="o" && buttonTiles[4].textContent==="o" && buttonTiles[6].textContent==="o" ){
            if(buttonTiles[2].textContent ==="x"){
                console.log("X won");
            }
            else{
                console.log("O won");
            }
        }
        /*
        // X win conditions 
        if(buttonTiles[0].textContent==="x" && buttonTiles[1].textContent==="x" && buttonTiles[2].textContent==="x" ){
            console.log(" X won");
            break;
        }
        else if(buttonTiles[3].textContent==="x" && buttonTiles[4].textContent==="x" && buttonTiles[5].textContent==="x" ){
            console.log(" X won");
            break;
        }
        else if(buttonTiles[6].textContent==="x" && buttonTiles[7].textContent==="x" && buttonTiles[8].textContent==="x" ){
            console.log(" X won");
            break;
        }
        else if(buttonTiles[0].textContent==="x" && buttonTiles[3].textContent==="x" && buttonTiles[6].textContent==="x" ){
            console.log(" X won");
            break;
        }
        else if(buttonTiles[1].textContent==="x" && buttonTiles[4].textContent==="x" && buttonTiles[7].textContent==="x" ){
            console.log(" X won");
            break;
        }
        else if(buttonTiles[2].textContent==="x" && buttonTiles[5].textContent==="x" && buttonTiles[8].textContent==="x" ){
            console.log(" X won");
            break;
        }
        else if(buttonTiles[0].textContent==="x" && buttonTiles[4].textContent==="x" && buttonTiles[8].textContent==="x" ){
            console.log(" X won");
            break;
        }
        else if(buttonTiles[2].textContent==="x" && buttonTiles[4].textContent==="x" && buttonTiles[6].textContent==="x" ){
            console.log(" X won");
            break;
        }
        // O win conditions
        
        else if(buttonTiles[0].textContent==="o" && buttonTiles[1].textContent==="o" && buttonTiles[2].textContent==="o" ){
            console.log("O won");
            break;
        }
        else if(buttonTiles[3].textContent==="o" && buttonTiles[4].textContent==="o" && buttonTiles[5].textContent==="o" ){
            console.log(" O won");
            break;
        }
        else if(buttonTiles[6].textContent==="o" && buttonTiles[7].textContent==="o" && buttonTiles[8].textContent==="o" ){
            console.log(" O won");
            break;
        }
        else if(buttonTiles[0].textContent==="o" && buttonTiles[3].textContent==="o" && buttonTiles[6].textContent==="o" ){
            console.log(" O won");
            break;
        }
        else if(buttonTiles[1].textContent==="o" && buttonTiles[4].textContent==="o" && buttonTiles[7].textContent==="o" ){
            console.log(" O won");
            break;
        }
        else if(buttonTiles[2].textContent==="o" && buttonTiles[5].textContent==="o" && buttonTiles[8].textContent==="o" ){
            console.log(" O won");
            break;
        }
        else if(buttonTiles[0].textContent==="o" && buttonTiles[4].textContent==="o" && buttonTiles[8].textContent==="o" ){
            console.log(" O won");
            break;
        }
        else if(buttonTiles[2].textContent==="o" && buttonTiles[4].textContent==="o" && buttonTiles[6].textContent==="o" ){
            console.log(" O won");
            break;
        }
        */
    }
}
   
function addEvent(buttonTiles){
    for(let i in buttonTiles){
        buttonTiles[i] = document.addEventListener("click", addTile);
    }
}

let buttonTiles = document.querySelectorAll(".buttonTile");
addEvent(buttonTiles);


function clearBoard(){
 for(let i in buttonTiles){
     buttonTiles[i].textContent = "";
     // undefined error men funkar ändå?
    }
}
let restartButton = document.querySelector("#restartButton");
restartButton.addEventListener("click", clearBoard);
