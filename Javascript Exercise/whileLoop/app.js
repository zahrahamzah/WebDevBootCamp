let maxNum = parseInt(prompt("Enter a max num"));

const targetNum = Math.floor(Math.random() * maxNum + 1);
console.log(targetNum);

let guess = prompt("Enter your guess");
let attempt = 1;

while (parseInt(guess) !== targetNum) {
    attempt++;

    if (guess == 'q') {
        break;
    }

    if (parseInt(guess) > targetNum){
        guess = prompt("Too high. Enter a new guess.");
    } else {
        guess = prompt("Too low. Enter a new guess");    
    }
} 

if (guess == 'q') {
    console.log("You quit.")
} else {
    console.log(`It took you ${attempt} attempts`);
}

