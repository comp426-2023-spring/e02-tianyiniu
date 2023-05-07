// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

const rps_rules_text = `Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`

const rpsls_rules_text = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock SMOOSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock
  - Rock CRUSHES Scissors`

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

function getShot() {
    var gameSelection = document.getElementsByName("noOpponentGame");
    var game = null;
    
    for (var i = 0; i < gameSelection.length; i++) {
    if (gameSelection[i].checked) {
        game = gameSelection[i].value;
        break;
        }
    }
    const isRPS = game=="RPS" ? true : false; 

    if (isRPS) {
        rpsNoOpponent().then(shot => {
            console.log(shot.player);
            document.getElementById("draw").value = shot.player;
        })
    } else {
        rpslsNoOpponent().then(shot => {
            console.log(shot.player);
            document.getElementById("draw").value = shot.player;
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
    alert(rps_rules_text);
}

function helpRPSLS() {
    alert(rpsls_rules_text);
}

function reset() {
    // Reset all selections and clear fields
    var gameSelection = document.getElementsByName("game");
    var opponentSelection = document.getElementsByName("opponent");
    var noOpponentGameSelection = document.getElementsByName("noOpponentGame");

    for(var i=0; i<gameSelection.length; i++) {
        gameSelection[i].checked = false;
    }

    for (var i=0; i<opponentSelection.length; i++) {
        opponentSelection[i].checked = false;
    }

    for (var i=0; i<noOpponentGameSelection.length; i++) {
        noOpponentGameSelection[i].checked = false;
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
    const isRPS = game=="RPS" ? true : false; 

    for (var i = 0; i < opponentSelection.length; i++) {
        if (opponentSelection[i].checked) {
            opponent = opponentSelection[i].value;
            break;
        }
    }
    const hasOpponent = opponent=="YES" ? true : false;

}
