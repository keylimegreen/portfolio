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
    }

    reset() {
        return new Gameboard()
    }

    displayBoard() {
        const gameboard = document.getElementById("gameboard");
        const board = this.gameboard()
        gameboard.innerText = board
        gameboard.style.gridTemplateColumns = "1fr".repeat(this.col)
        gameboard.style.gridTemplateRows = "1fr".repeat(this.row)

    }
}

window.addEventListener("load", ()=> {
    
    let gameboard = new Gameboard()
    const resetBtn = document.getElementById("reset")
    const renameBtn = document.getElementById("rename")
    const renameDialog = document.getElementById("rename-dialog")
    const renameSubmitBtn = document.getElementById("rename-submit-btn")
    
    gameboard.displayBoard()
    
    

    resetBtn.addEventListener("click", () => {
        gameboard = new Gameboard()
        console.log("new game")
    })
    
    renameBtn.addEventListener("click", () => {
        renameDialog.showModal()
        console.log("rename")
    })

    renameSubmitBtn.addEventListener("click", (event) => {
        event.preventDefault()
    })

    console.log("loaded")
})