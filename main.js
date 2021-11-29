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
    
    static handleClick(event) {
        if ($(event.target).html() === '') {
            $(event.target).html('X');
            console.log($(event.target).data('value'));
            game.board[$(event.target).data('value')] = 'x';
            
            if (game.checkWin(game.board, 'x') == true) {
                console.log('you have won');
            } else {
                $("#header").html("AI's turn!");
                
                game.runAI();
            }
        }
    }
    
    // Function for our AI.
    // Logic goes here, need to access board state and implement an algorithm
    static runAI() {
        console.log('runAI');

        let cell = null

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

        if (cell != null) {
            game.aiClick(cell);
        }

        if (game.checkWin(game.board, 'o') == true) {
            console.log('ai has won');
        } else {
            
        }

        // end of function
        $("#header").html("Your turn!");
    }

    static aiClick(cellNumber) {
        console.log('aiClick', cellNumber);
        game.board[cellNumber] = 'o';
        $(`.cell[data-value="${cellNumber}"]`).html('O')
    }

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
