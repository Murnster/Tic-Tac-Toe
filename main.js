class game {
    constructor(gameArray) {
        this.gameArray = gameArray;
    }

    static board = ["", "", "", 
                    "", "", "", 
                    "", "", ""];
    
    static status = "start";

    // Function that initiates the board when we load the page
    // Adds a click event to table cells that runs following code
    static startGame() {
        $('#gameBoard .cell').on('click', (event) => {
           game.handleClick(event);
        });
    }
    
    // Function that handles the user click event 
    static handleClick(event) {
        if ($(event.target).html() === '') {
            $(event.target).html('X');
            game.board[$(event.target).data('value')] = 'x';
            
            if (game.checkWin(game.board, 'x') == true) {
                $("#header").html("YOU HAS WON THE GAME!");
                $("#gameBoard").css('pointer-events', 'none');
                $("#playAgain").show();
            } else {
                $("#header").html("AI's turn!");
                
                game.runAI();
            }
        }
    }
    
    // Function for our AI.
    // Logic goes here, need to access board state and implement an algorithm
    static runAI() {
        let cell = null
        let openCells = [];

        // Checking open locations first, and will randomly pick after
        game.board.forEach((cell, index) => {
            if (cell == '') {
                openCells.push(index);
            }
        });
        
        cell = openCells[Math.floor(Math.random() * openCells.length)];

        // Checks if player has any winning scenarios
        if (game.board[0] == 'x' && game.board[1] == 'x' && game.board[2] == '') {
            cell = 2;
        } else if (game.board[0] == 'x' && game.board[2] == 'x' && game.board[1] == '') {
            cell = 1;
        } else if (game.board[1] == 'x' && game.board[2] == 'x' && game.board[0] == '') {
            cell = 0;
        } else if (game.board[0] == 'x' && game.board[3] == 'x' && game.board[6] == '') {
            cell = 6;
        } else if (game.board[0] == 'x' && game.board[6] == 'x' && game.board[3] == '') {
            cell = 3;
        } else if (game.board[6] == 'x' && game.board[3] == 'x' && game.board[0] == '') {
            cell = 0;
        } else if (game.board[0] == 'x' && game.board[4] == 'x' && game.board[8] == '') {
            cell = 8;
        } else if (game.board[0] == 'x' && game.board[8] == 'x' && game.board[4] == '') {
            cell = 4;
        } else if (game.board[4] == 'x' && game.board[8] == 'x' && game.board[0] == '') {
            cell = 0;
        } else if (game.board[3] == 'x' && game.board[4] == 'x' && game.board[5] == '') {
            cell = 5;
        } else if (game.board[3] == 'x' && game.board[5] == 'x' && game.board[4] == '') {
            cell = 4;
        } else if (game.board[4] == 'x' && game.board[5] == 'x' && game.board[3] == '') {
            cell = 3;
        } else if (game.board[6] == 'x' && game.board[7] == 'x' && game.board[8] == '') {
            cell = 8;
        } else if (game.board[7] == 'x' && game.board[8] == 'x' && game.board[6] == '') {
            cell = 6;
        } else if (game.board[6] == 'x' && game.board[8] == 'x' && game.board[7] == '') {
            cell = 7;
        } else if (game.board[6] == 'x' && game.board[4] == 'x' && game.board[2] == '') {
            cell = 2;
        } else if (game.board[6] == 'x' && game.board[2] == 'x' && game.board[4] == '') {
            cell = 4;
        } else if (game.board[4] == 'x' && game.board[2] == 'x' && game.board[6] == '') {
            cell = 6;
        } else if (game.board[1] == 'x' && game.board[4] == 'x' && game.board[7] == '') {
            cell = 7;
        } else if (game.board[1] == 'x' && game.board[7] == 'x' && game.board[4] == '') {
            cell = 4;
        } else if (game.board[4] == 'x' && game.board[7] == 'x' && game.board[1] == '') {
            cell = 1;
        } else if (game.board[2] == 'x' && game.board[5] == 'x' && game.board[8] == '') {
            cell = 8;
        } else if (game.board[2] == 'x' && game.board[8] == 'x' && game.board[5] == '') {
            cell = 5;
        } else if (game.board[5] == 'x' && game.board[8] == 'x' && game.board[2] == '') {
            cell = 2;
        }

        // Checks if AI has any winning scenarios. We check this second because if AI can win
        // it doesn't care if player has winning scenario
        if (game.board[0] == 'o' && game.board[1] == 'o' && game.board[2] == '') {
            cell = 2;
        } else if (game.board[0] == 'o' && game.board[2] == 'o' && game.board[1] == '') {
            cell = 1;
        } else if (game.board[1] == 'o' && game.board[2] == 'o' && game.board[0] == '') {
            cell = 0;
        } else if (game.board[0] == 'o' && game.board[3] == 'o' && game.board[6] == '') {
            cell = 6;
        } else if (game.board[0] == 'o' && game.board[6] == 'o' && game.board[3] == '') {
            cell = 3;
        } else if (game.board[6] == 'o' && game.board[3] == 'o' && game.board[0] == '') {
            cell = 0;
        } else if (game.board[0] == 'o' && game.board[4] == 'o' && game.board[8] == '') {
            cell = 8;
        } else if (game.board[0] == 'o' && game.board[8] == 'o' && game.board[4] == '') {
            cell = 4;
        } else if (game.board[4] == 'o' && game.board[8] == 'o' && game.board[0] == '') {
            cell = 0;
        } else if (game.board[3] == 'o' && game.board[4] == 'o' && game.board[5] == '') {
            cell = 5;
        } else if (game.board[3] == 'o' && game.board[5] == 'o' && game.board[4] == '') {
            cell = 4;
        } else if (game.board[4] == 'o' && game.board[5] == 'o' && game.board[3] == '') {
            cell = 3;
        } else if (game.board[6] == 'o' && game.board[7] == 'o' && game.board[8] == '') {
            cell = 8;
        } else if (game.board[7] == 'o' && game.board[8] == 'o' && game.board[6] == '') {
            cell = 6;
        } else if (game.board[6] == 'o' && game.board[8] == 'o' && game.board[7] == '') {
            cell = 7;
        } else if (game.board[6] == 'o' && game.board[4] == 'o' && game.board[2] == '') {
            cell = 2;
        } else if (game.board[6] == 'o' && game.board[2] == 'o' && game.board[4] == '') {
            cell = 4;
        } else if (game.board[4] == 'o' && game.board[2] == 'o' && game.board[6] == '') {
            cell = 6;
        } else if (game.board[1] == 'o' && game.board[4] == 'o' && game.board[7] == '') {
            cell = 7;
        } else if (game.board[1] == 'o' && game.board[7] == 'o' && game.board[4] == '') {
            cell = 4;
        } else if (game.board[4] == 'o' && game.board[7] == 'o' && game.board[1] == '') {
            cell = 1;
        } else if (game.board[2] == 'o' && game.board[5] == 'o' && game.board[8] == '') {
            cell = 8;
        } else if (game.board[2] == 'o' && game.board[8] == 'o' && game.board[5] == '') {
            cell = 5;
        } else if (game.board[5] == 'o' && game.board[8] == 'o' && game.board[2] == '') {
            cell = 2;
        }

        // Clicks on cell
        if (cell != null) {
            game.aiClick(cell);
        } else {
            // This will run when there are no spots available and there is a draw
            $("#header").html("The game has ended in a draw!");
            $("#gameBoard").css('pointer-events', 'none');
            $("#playAgain").show();
        }
    }

    // Handles AI click event
    static async aiClick(cellNumber) {
        game.board[cellNumber] = 'o';
        $(`.cell[data-value="${cellNumber}"]`).html('O');

        if (game.checkWin(game.board, 'o') == true) {
            $("#header").html("AI HAS WON THE GAME!");
            $("#gameBoard").css('pointer-events', 'none');
            $("#playAgain").show();
        } else {
            $("#header").html("Your turn!");
        }

    }

    // Checks if there is a win, given x or o as player type
    static checkWin(board, playerType) {
        if (
            (
                board[0] == playerType && board[1] == playerType && board[2] == playerType ||
                board[3] == playerType && board[4] == playerType && board[5] == playerType ||
                board[6] == playerType && board[7] == playerType && board[8] == playerType ||
                board[0] == playerType && board[3] == playerType && board[6] == playerType ||
                board[1] == playerType && board[4] == playerType && board[7] == playerType ||
                board[2] == playerType && board[5] == playerType && board[8] == playerType ||
                board[0] == playerType && board[4] == playerType && board[8] == playerType ||
                board[2] == playerType && board[4] == playerType && board[6] == playerType
            )
        ) {
            return true;
        } else {
            return false;
        }
    }
}
