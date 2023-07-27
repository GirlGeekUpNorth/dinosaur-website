let player = prompt("Enter rock (r), paper (p) or scissors (s)?")

if (player == "r" ) {
    console.log("You have chosen ROCK")
}
else if (player == "p" ) {
    console.log("You have chosen PAPER")
}
else {
    console.log("You have chosen SCISSORS")
}

let random = Math.floor(Math.random() * 3) + 1
let computer = 0;

if (random == 1 ) {
    console.log("Computer has chosen ROCK");
    computer = "r";
}
else if (random == 2 ) {
    console.log("Computer has chosen PAPER");
    computer = "p";
}
else {
    console.log("Computer has chosen SCISSORS");
    computer = "s";
}

if (player == computer) {
    console.log("It's a DRAW")
}
else if (player == 'r') {
    if (computer == 's') {
        console.log("You win!");
    }
    else {
        console.log("You lose :(")
    }
}
else if (player == 'p') {
    if (computer == 'r') {
        console.log("You win!");
    }
    else {
        console.log("You lose :(")
    }
}
else if (player == 's') {
    if (computer == 'r') {
        console.log("You win!");
    }
    else {
        console.log("You lose :(")
    }
}

  