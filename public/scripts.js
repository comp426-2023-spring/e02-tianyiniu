// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function rpslsOpponent(shot) {
    const url = "/app/rpsls/play/" + shot
    return response = fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(error));
}

function fetchTest() {
    rpslsOpponent("rock").then(someVal => {
        console.log("Shit");
        console.log(someVal);
    })
}
