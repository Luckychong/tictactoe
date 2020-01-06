let user= "O";
let numberofturns= 0;
let gameover= false;


function performLogic(buttonID, tileID) {
    if (gameover == false){
        $(buttonID).hide();
        $(tileID).text(user);
        checkVerticalWins();
        checkDiagonalWins();
        checkHoritzonalWins();
        user = switchedPlayer(user);
        endGame();
    }
    
}
function switchedPlayer(user) {
    if (user == "X"){
        return "O"
    }
    else  {
        return "X"
    }

}
function endGame() {
    numberofturns = numberofturns + 1
    if (numberofturns === 9) {
        $("#title").text("It's a draw!")
        gameover = true
    }
}

function winner(tile1, tile2, tile3){
    t1 = $(tile1).text()
    t2 = $(tile2).text()
    t3 = $(tile3).text()
    if (t1 === user && t2 === user && t3 === user){
        return true
    } 
    else {
        return false
    }
}

function checkVerticalWins(){
    if (winner("#tile1", "#tile4", "#tile7") == true || winner("#tile2", "#tile5", "#tile8") == true || winner("#tile3", "#tile6", "#tile9") == true) {
        $("#title").text(user + " Wins!")
        gameover = true
    }

}
function checkHoritzonalWins(){
    if (winner("#tile1", "#tile2", "#tile3") == true || winner("#tile4", "#tile5", "#tile6") == true || winner("#tile7", "#tile8", "#tile9") == true) {
            $("#title").text(user + " Wins!")
            gameover = true
    }
}
function checkDiagonalWins(){
    if (winner("#tile1", "#tile5", "#tile9") == true || winner("#tile3", "#tile5", "#tile7") == true) {
            $("#title").text(user + " Wins!")
            gameover = true
    }
}
$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});


