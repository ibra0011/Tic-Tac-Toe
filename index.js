window.onload =()=> {
    const select = document.querySelector("#size");
    const cells = document.querySelectorAll(".cell");
    const statusText = document.querySelector("#statusText");
    const restartBtn = document.querySelector("#restartBtn");
    const tab = Array ;
    
    let options = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let running = false;

    function tablau(n){
        for(i==0; i<=n; i++){
            for(j==0; j<=n; j++){
                tab =[i][j];
                const cellcontainer = document.querySelector("")
            }
        }
    }

    initializeGame();

    function initializeGame() {
        cells.forEach( cell => cell.addEventListener("click", cellClicked));
        restartBtn.addEventListener("click", restertGame);
        statusText.textContent = `${currentPlayer}'s turn`;
        running = true;
    }

    function cellClicked() {
        const cellIndex = this.getAttribute("cellIndex");
        if (options[cellIndex] != "" || !running ) {
            return;
        }
        updateCell(this, cellIndex);
        checkWinner();
    }

    function updateCell(cell, index) {
        options[index] = currentPlayer;
        cell.textContent = currentPlayer;
    }

    function changePlayer() {
        currentPlayer = (currentPlayer == "X") ? "O" : "X";
        statusText.textContent = `${currentPlayer}'s turn`;
    }

    function checkWinner() {
        let roundwon = false;

        for(let i = 0; i < winConditions.length; i++) {
            const condition = winConditions[i];
            const cellA = options[condition[0]];
            const cellB = options[condition[1]];
            const cellC = options[condition[2]];
        
            if(cellA == "" || cellB == "" || cellC == "" ) {
                continue;
            }
            
            if (cellA == cellB && cellB == cellC ) {
                roundwon = true;
                break;
            }
        }
        
        if(roundwon) {
            statusText.textContent = `${currentPlayer} wins!`;
            running = false;
        }
        else if(!options.includes("")) {
            statusText.textContent = `Draw!`;
            running = false;
        }
        else {
            changePlayer();
        }
    }

    function restertGame() {
        currentPlayer = "X";
        options = ["", "", "", "", "", "", "", "", ""];
        statusText.textContent = `${currentPlayer}'s turn`;
        cells.forEach(cell => cell.textContent = "");
        running = true;
    }
}