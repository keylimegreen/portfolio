class Gameboard {
    constructor() {
        this.player1 = "Player 1"
        this.player2 = "Player 2"
        this.gameboard = []
        this.row = 3
        this.col = 3
        let currentTurn = this.player1
        for (n in row) {
            nextRow = []
            for (n in col){
                nextRow.push(0)
            }
            this.gameboard.push(nextRow)
        }

        console.log(this.gameboard)
    } 
     
    gameboard() {
        return this.gameboard;
    };

    nextTurn() {
        currentTurn === this.player1 ? currentTurn = this.player2 : currentTurn = this.player1
    }

    move() {
        if (this.validateTurn() ) {

        
            if (this.checkWin() ) {

            } else {
                this.nextTurn()
            }
        } else {

        }
    }

    validateTurn() {

    } 

    checkWin() {

    }

    rename(p1,p2) {
        this.player1 = p1
        this.player2 = p2
        const p1text = document.getElementById("player-1")
        p1text.innerText = this.player1
        const p2text = document.getElementById("player-1")
        p2text.innerText = this.player2
    }

    reset() {
        return new Gameboard()
    }

    displayBoard() {
        const gameboard = document.getElementById("gameboard");
        const board = this.gameboard()
        gameboard.innerText = board
        console.log(board)
        gameboard.style.gridTemplateColumns = "1fr".repeat(this.col)
        gameboard.style.gridTemplateRows = "1fr".repeat(this.row)

    }

    newStatus(update) {
        const status = document.getElementById("status-bar")
        status.innerText = update
    }
}



window.addEventListener("load", ()=> {
    
    let gameboard = new Gameboard()
    const resetBtn = document.getElementById("reset")
    const renameBtn = document.getElementById("rename")
    const renameDialog = document.getElementById("rename-dialog")
    const renameSubmitBtn = document.getElementById("rename-submit-btn")
    
    gameboard.displayBoard()
    gameboard.rename("Player1", "Player2")
    
    

    resetBtn.addEventListener("click", () => {
        gameboard = new Gameboard()
        gameboard.newStatus("new game")
    })
    
    renameBtn.addEventListener("click", () => {
        renameDialog.showModal()
        gameboard.newStatus("Renamed!")
    })

    renameSubmitBtn.addEventListener("click", (event) => {
        event.preventDefault()
    })

    gameboard.newStatus("Loaded!")
})