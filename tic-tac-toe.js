class Gameboard {
    constructor() {
        /*player 1 represented by x and player 2 represented by o in gameboard*/
        this.player1 = "x"
        this.player2 = 'o'
        this.p1name = "Player 1"
        this.p2name = "Player 2"
        this.gameboard = []
        this.row = 3
        this.col = 3
        this.currentTurn = this.player1
        for (let m = 0; m < this.row; m++) {
            let nextRow = []
            for (let n = 0; n < this.col; n++){
                nextRow.push(0)
            }
            this.gameboard.push(nextRow)
        }
        this.rename(this.p1name, this.p2name)
        //console.log(this.gameboard)
        this.displayBoard()
        this.newStatus(`${this.p1name}'s turn.`)
    } 
     


    nextTurn() {
        if (this.currentTurn == this.player1) {
            this.currentTurn = this.player2
            this.newStatus(`${this.p2name}'s turn.`)
        } else {
            this.currentTurn = this.player1
            this.newStatus(`${this.p1name}'s turn.`)
        }
    }

    move(row, col) {
        if (this.validateTurn(row, col )) {
            this.gameboard[row-1][col-1] = this.currentTurn
            this.displayBoard()
            if (this.checkWin() ) {
                this.winner()
            } else {
                
                this.nextTurn()
                
                //console.log(this.gameboard) 
            }
        } else {
            alert("Invalid turn")
        }
    }

    winner() {
        this.newStatus(`${this.currentTurn} wins!`)
        const board = document.getElementById("gameboard")
        while (board.firstChild) {
            board.firstChild.removeEventListener()
        }
    }

    validateTurn(row, col) {
        if (this.gameboard[row-1][col-1] === 0) {
            return true
        } else {
            return false
        }
    } 

    checkWin() {
        

        let horizontalArr = []
        let verticalArr = []
        let crossArr = []
        //console.log(this.gameboard)
        for (let i = 0; i < this.row; i++) {
            horizontalArr.push(this.gameboard[i])
            
            for (let j = 0; j < this.col; j++) {
                if (verticalArr[j]) {
                    verticalArr[j].push(this.gameboard[i][j])
                } else {
                    verticalArr[j] = [this.gameboard[i][j]]
                }
                
            }

            let z = i
            
            if (crossArr.length != 0) {
                //console.log('oops')
                crossArr[0].push(this.gameboard[i][z])
                z++
                crossArr[1].push(this.gameboard[i].at(-z))
                
                
            } else {
                crossArr.push([this.gameboard[i][z]])
                z++
                crossArr.push([this.gameboard[i].at(-z)])
                
            }
            
        }
        
        const allArr = [...horizontalArr,...verticalArr,...crossArr]
        //console.log(allArr)
        for(let i = 0; i < allArr.length; i++) {
            let testSet = new Set(allArr[i])
            if (testSet.has(0)) continue
            else if (testSet.size == 1) return true
            //if (testSet.size == 1 && testSet.values()
        }
        return false
        
    }

    rename(p1,p2) {
        this.p1name = p1
        this.p2name = p2
        const p1text = document.getElementById("player-1")
        p1text.innerText = this.p1name
        const p2text = document.getElementById("player-2")
        p2text.innerText = this.p2name
    }

    reset() {
        return new Gameboard()
    }

    displayBoard() {
        const board = document.getElementById("gameboard")
        while (board.firstChild) {
            board.removeChild(board.firstChild);
          }
        board.style.gridTemplateColumns = "1fr ".repeat(this.col)
        board.style.gridTemplateRows = "1fr ".repeat(this.row)
        for (let i = 1; i <= this.row; i++) {
            for (let j = 1; j <= this.col; j++) {
                
                let piece = this.gameboard[i-1][j-1]
                let boardBox = document.createElement("div")
                boardBox.dataset.row = i
                boardBox.dataset.col = j
                boardBox.addEventListener("click", ()=> {
                    this.move(boardBox.dataset.row, boardBox.dataset.col)
                })

                boardBox.addEventListener("mouseover", () => {
                    boardBox.style.backgroundColor = "antiquewhite"
                })

                boardBox.addEventListener("mouseout", () => {
                    boardBox.style.backgroundColor = "white"
                })

                if (piece != 0) {
                    const innerDiv = document.createElement("p")
                    innerDiv.innerText = piece
                    innerDiv.style.textAlign = "center"
                    innerDiv.style.alignItems = "center"
                    innerDiv.style.borderStyle = "none"
                    innerDiv.style.fontSize = "30px"
                    boardBox.appendChild(innerDiv)
                }
                board.appendChild(boardBox)
            }
        }
    }

    newStatus(update) {
        const status = document.getElementById("status-bar")
        status.innerText = update
    }
}



window.addEventListener("load", function() {
    let gameboard = new Gameboard()
    const resetBtn = document.getElementById("reset-btn")
    const renameBtn = document.getElementById("rename-btn")
    const renameDialog = document.getElementById("rename-dialog")
    const renameSubmitBtn = document.getElementById("rename-submit-btn")
    const resetDialogBtn =  document.getElementById("reset-dialog-btn")
    
    

    resetBtn.addEventListener("click", () => {
        gameboard = gameboard.reset()
    })
    
    renameBtn.addEventListener("click", () => {
        renameDialog.showModal()
        gameboard.newStatus("Renamed!")
    })

    renameSubmitBtn.addEventListener("click", (event) => {
        event.preventDefault()
    })
})