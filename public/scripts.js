// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function rpsOpponent(shot) {
    const url = "/app/rps/play/" + shot
    return response = fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(error));
}

function rpslsOpponent(shot) {
    const url = "/app/rpsls/play/" + shot
    return response = fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(error));
}

function rpsNoOpponent() {
    const url = "/app/rps"
    return response = fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(error));
}

function rpslsNoOpponent() {
    const url = "/app/rpsls"
    return response = fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(error));
}

function getShot(isRPS) {
    if (isRPS) {
        rpsNoOpponent().then(someVal => {
            console.log(someVal.player);
            document.getElementById("output").innerHTML = someVal.player;
        })
    } else {
        rpslsNoOpponent().then(someVal => {
            console.log(someVal.player);
        })
    }
}

function playOpponent(isRPS, shot) {
    rpslsOpponent("rock").then(someVal => {
        console.log("With Opponent");
        console.log(someVal.player);
        console.log(someVal.opponent);
        console.log(someVal.result);
    });
    rpslsOpponent("rock").then(someVal => {
        console.log("With Opponent");
        console.log(someVal.player);
        console.log(someVal.opponent);
        console.log(someVal.result);
    })
}

function helpRPS() {
    console.log("RPS help");
}

function helpRPSLS() {
    console.log("RPSLS help");
}

function reset() {
    // Reset all selections and clear fields
    var gameSelection = document.getElementsByName("game");
    var opponentSelection = document.getElementsByName("opponent");

    for(var i=0; i<gameSelection.length; i++) {
        gameSelection[i].checked = false;
    }

    for (var i=0; i<opponentSelection.length; i++) {
        opponentSelection[i].checked = false;
    }
}

function play() {
    var gameSelection = document.getElementsByName("game");
    var opponentSelection = document.getElementsByName("opponent");

    var game = null;
    var opponent = null;
    
    for (var i = 0; i < gameSelection.length; i++) {
    if (gameSelection[i].checked) {
        game = gameSelection[i].value;
        break;
        }
    }
    console.log(game)

    for (var i = 0; i < opponentSelection.length; i++) {
        if (opponentSelection[i].checked) {
            opponent = opponentSelection[i].value;
            break;
        }
    }
    console.log(opponent)
}
