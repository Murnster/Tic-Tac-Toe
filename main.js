// Function that initiates the board when we load the page
// Adds a click event to table cells that runs following code
function startGame() {
    $('#gameBoard td').on('click', (e) => {
        $(e.target).html('X');
        $("#header").html("AI's turn!");

        runAI();
    });
}


// Function for our AI. Need logic to analyze board
function runAI() {
    // Logic goes here, need to access board state and implement an algorithm


    // At very end of function
    $("#header").html("Your turn!");
}
