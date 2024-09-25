// Dekendrick Tyshawn Teamer
// Function to play the Craps game
function playCraps() {
    // Generate two random numbers between 1 and 6
    let die1 = Math.floor(Math.random() * 6) + 1; // Generate random number for die 1
    let die2 = Math.floor(Math.random() * 6) + 1; // Generate random number for die 2

    // Calculate the sum of the dice
    let sum = die1 + die2;

    // Display the results of the roll
    let resultsDiv = document.getElementById("results"); // Get the results div element
    resultsDiv.innerHTML = `
        <p>You rolled a ${die1} and a ${die2}!</p>
        <p>The sum is ${sum}
    `;

    // Determine the outcome of the game based on the sum
    if (sum === 7 || sum === 11) {  // Check if the sum is 7 or 11
        resultsDiv.innerHTML += "<p>CRAPS - You lose!</p>";  // Display the "CRAPS" message
    } else if (die1 === die2 && die1 % 2 === 0) {  // Check if the dice are doubles and even
        resultsDiv.innerHTML += "<p>You won!</p>";  // Display the "You won!" message
    } else {  // If neither of the above conditions are met
        resultsDiv.innerHTML += "<p>You pushed!</p>";  // Display the "You pushed!" message
    }
}

// Attach the playCraps function to the button click event
let playButton = document.getElementById("playButton");  // Get the play button element
playButton.addEventListener("click", playCraps);  // Add an event listener to call playCraps when the button is clicked
