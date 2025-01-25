// Function to check the user's answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer was selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare the user's answer with the correct answer and provide feedback
        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no option is selected, display a message prompting the user to choose an answer
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
