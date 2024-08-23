function checkpalindrome() {
    let continueInput = true;
    // enter a result for this element
    const resultDiv = document.getElementById("result");

    while (continueInput) {
        // Prompt the user to enter a string
        let userInput = prompt("Enter a word or phrase or type 'exit' to quit" );

        // Check if the user wants to exit
        if (userInput === null || userInput.toLowerCase() === 'exit') {
            continueInput = false;
            resultDiv.innerHTML += "You have exited the palindrome checker.<br>";
            break;
        }

        // Remove spaces and convert to lowercase for comparison
        const cleanedInput = userInput.replace(/\s+/g, '').toLowerCase();
        const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');

        // Notify the user if the string is a Palindrome
        if (isPalindrome) {
            resultDiv.innerHTML += `"${userInput}" is a palindrome.<br>`;
        } else {
            resultDiv.innerHTML += `"${userInput}" is not a palindrome.<br>`;
        }
    }
}