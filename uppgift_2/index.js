document.addEventListener("DOMContentLoaded", () => {
  class Sudoku {
    constructor(size) {
      this.size = size;
      this.board = this.createBoard();
      this.table = document.querySelector(".sudoku-board");
    }

    // Creates a 2 dimentional array based on the size.
    createBoard() {
      let board = [];

      for (let i = 0; i < this.size; i++) {
        let row = Array(this.size).fill(null);
        board.push(row);
      }
      return board;
    }

    // Fills the board with initial random valid numbers between 1 and 4.
    fillBoard() {
      for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
          if (Math.random() < 0.25) {
            const randomNumber = this.randomNumber();

            if (this.isValid(i, j, randomNumber)) {
              this.board[i][j] = randomNumber;
            }
          }
        }
      }
    }

    // Returns a random number between 1 and 4.
    randomNumber() {
      return Math.floor(Math.random() * this.size) + 1;
    }

    // Fills the table cells with the generated random numbers.
    showRandomNumbers() {
      for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
          const cell = this.getTableCell(i, j);

          if (this.board[i][j] !== null) {
            cell.textContent = this.board[i][j];
            cell.contentEditable = "false";
          }
        }
      }
    }

    // Returns a cell in a specified (x,y) position.
    getTableCell(row, col) {
      return this.table.rows[row].cells[col];
    }

    // Returns true if number exists in row or column.
    isInRowOrCol(row, col, num, i) {
      return this.board[row][i] === num || this.board[i][col] === num;
    }

    // Returns true if number exists in subgrid.
    isInSubgrid(startRow, startCol, num, i, j) {
      return (
        this.board[startRow + i] &&
        this.board[startRow + i][startCol + j] === num
      );
    }

    // Returns true if number is valid (Does not in row or column and not in subgrid)
    isValid(row, col, num) {
      // Check row and column
      for (let i = 0; i < this.size; i++) {
        if (this.isInRowOrCol(row, col, num, i)) {
          return false;
        }
      }

      const startRow = row - (row % 2);
      const startCol = col - (col % 2);

      // Check subgrid
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          if (this.isInSubgrid(startRow, startCol, num, i, j)) {
            return false;
          }
        }
      }

      return true;
    }

    handleInput(event) {
      const cell = event.target;
      const row = cell.parentElement.rowIndex;
      const col = cell.cellIndex;
      const input = parseInt(cell.textContent);

      if (!this.isValid(row, col, input)) {
        alert("Invalid Number");
        cell.textContent = "";
      } else {
        this.board[row][col] = input;
      }
    }

    inputEventListener() {
      document
        .querySelectorAll(".sudoku-board td[contenteditable='true']")
        .forEach((cell) => {
          cell.addEventListener("input", this.handleInput.bind(this));
        });
    }

    init() {
      this.fillBoard();
      this.showRandomNumbers();
      this.inputEventListener();
    }
  }

  const sudoku = new Sudoku(4);
  sudoku.init();
});
