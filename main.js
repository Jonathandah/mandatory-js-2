let player = "x";
let numberX = 0; // poäng för X
let numberO = 0; // poäng för O
let turn = 0; 
let winner = $("#winner");
let scoreForX = $("#scoreX");
let scoreForO = $("#scoreO");
let buttonTiles = $(".buttonTile"); 

function addEvent (){
    buttonTiles.on("click", addTile);
}
addEvent();

function addTile(){
    if( player === "x" && $(this).text() === ""){ // ändrar vilken symbol som sätts ut
        $(this).text("x");
        player = "o";
        turn++  // varje gång if satsen körs pluusa turn med 1, när turn är 9 körs if satsen som kollar ifall matchen är lika.
        winCondtions();
    }
    
    else if (player === "o" && $(this).text() === ""){
        $(this).text("o");
        player = "x";
        turn++
        winCondtions();
    }
    
}
function winCondtions(){
    if(turn === 9 && winner.text() ==="Tic Tac Toe"){ //kollar om matchen är lika 
        winner.text("Tie");
    } 
    
    for(let i = 0; i<buttonTiles.length; i++){ // hela loopen innehåller alla win-conditions
        if($(buttonTiles[0]).text() ==="x" && $(buttonTiles[1]).text() ==="x" && $(buttonTiles[2]).text() ==="x" || $(buttonTiles[0]).text() ==="o" && $(buttonTiles[1]).text() ==="o" && $(buttonTiles[2]).text() ==="o" ){
            if($(buttonTiles[0]).text() ==="x"){ // körs ifall X vann
                winner.text("X WON!!");
                removeEvent();   // kör functionen som tar bort alla eventlyssnare
                break;
            }else{ // körs ifall O vann
                removeEvent();
                break;
            }
        }
        else if($(buttonTiles[3]).text() ==="x" && $(buttonTiles[4]).text() ==="x" && $(buttonTiles[5]).text() ==="x" || $(buttonTiles[3]).text() ==="o" && $(buttonTiles[4]).text() ==="o" && $(buttonTiles[5]).text() ==="o" ){
            if($(buttonTiles[3]).text() ==="x"){
                winner.text("X WON!!");
                removeEvent();
                break;
            }else{
                removeEvent();
                break;
            }
        }
        else if($(buttonTiles[6]).text() ==="x" && $(buttonTiles[7]).text() ==="x" && $(buttonTiles[8]).text() ==="x" || $(buttonTiles[6]).text() ==="o" && $(buttonTiles[7]).text() ==="o" && $(buttonTiles[8]).text() ==="o" ){
            if($(buttonTiles[6]).text() ==="x"){
                winner.text("X WON!!");
                removeEvent();
                break;
            }else{
                removeEvent();
                break;
            }
        }
        else if($(buttonTiles[0]).text() ==="x" && $(buttonTiles[3]).text() ==="x" && $(buttonTiles[6]).text() ==="x" || $(buttonTiles[0]).text() ==="o" && $(buttonTiles[3]).text() ==="o" && $(buttonTiles[6]).text() ==="o" ){
            if($(buttonTiles[0]).text() ==="x"){
                winner.text("X WON!!");
                removeEvent();
                break;
            }else{
                removeEvent();
                break;
            }
        }
        else if($(buttonTiles[1]).text() ==="x" && $(buttonTiles[4]).text() ==="x" && $(buttonTiles[7]).text() ==="x" || $(buttonTiles[1]).text() ==="o" && $(buttonTiles[4]).text() ==="o" && $(buttonTiles[7]).text() ==="o" ){
            if($(buttonTiles[1]).text() ==="x"){
                winner.text("X WON!!");
                removeEvent();
                break;
            }else{
                removeEvent();
                break;
            }
        }
        else if($(buttonTiles[2]).text() ==="x" && $(buttonTiles[5]).text() ==="x" && $(buttonTiles[8]).text() ==="x" || $(buttonTiles[2]).text() ==="o" && $(buttonTiles[5]).text() ==="o" && $(buttonTiles[8]).text() ==="o" ){
            if($(buttonTiles[2]).text() ==="x"){
                winner.text("X WON!!");
                removeEvent();
                break;
            }else{
                removeEvent();
                break;
            }
        }
        else if($(buttonTiles[0]).text() ==="x" && $(buttonTiles[4]).text() ==="x" && $(buttonTiles[8]).text() ==="x" || $(buttonTiles[0]).text() ==="o" && $(buttonTiles[4]).text() ==="o" && $(buttonTiles[8]).text() ==="o" ){
            if($(buttonTiles[0]).text() ==="x"){
                winner.text("X WON!!");
                removeEvent();
                break;
            }else{
                removeEvent();
                break;
            }
        }
        else if($(buttonTiles[2]).text() ==="x" && $(buttonTiles[4]).text() ==="x" && $(buttonTiles[6]).text() ==="x" || $(buttonTiles[2]).text() ==="o" && $(buttonTiles[4]).text() ==="o" && $(buttonTiles[6]).text() ==="o" ){
            if($(buttonTiles[2]).text() ==="x"){
                winner.text("X WON!!");
                removeEvent();
                break;
            }else{
                removeEvent();
                break;
            }
        }
    }
}
   
function removeEvent(){// functionen tar bort evenlyssnaren på alla kanppar och lägger till poäng och text
    buttonTiles.off("click". addTile);
    if (winner.text() === "X WON!!"){
        numberX++;
        scoreForX.text("X-" + numberX);
    }
    else{
        winner.text("O WON!!");
        numberO++;
        scoreForO.text("O-" + numberO);
    }
}

function restart(){ // restart, 
    buttonTiles.text("");
    player = "x";
    turn = 0;
    winner.text("Tic Tac Toe");
    addEvent();
}
$("#restartButton").on("click", restart);

function newGame(){ // new game startar ett nytt spel, alla poäng försvinner
    buttonTiles.text("");
    scoreForX.text("X-0");
    scoreForO.text("O-0");
    numberX = 0;
    numberO = 0;
    player = "x";
    turn = 0;
    winner.text("Tic Tac Toe");
    addEvent();
   }
$("#newGameButton").on("click", newGame);