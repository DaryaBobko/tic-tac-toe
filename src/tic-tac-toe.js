class TicTacToe {
    constructor() {
        this.field = new Array(3);
        for (var i = 0; i < this.field.length; i++ ){
            this.field[i] = new Array(3);
        }
        this.currentPrayer = true;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPrayer ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] !== undefined && this.field[rowIndex][columnIndex] !== null) {
            return;
        }
        this.field[rowIndex][columnIndex] = this.currentPrayer;

        this.currentPrayer = !this.currentPrayer;
    }

    isCellsEqalsThemself(cellArr){
        if (cellArr[0] === cellArr[1] && cellArr[1] === cellArr[2] && cellArr[1] !== null && cellArr[1] !== undefined) {
            return true;
        }
    }

    isFinished() {
        var cellArr = [];
        for(var i = this.field.length - 1; i > -1; i--) {
            cellArr[i] = this.field[i][this.field.length - 1 - i];
        }
        if (this.isCellsEqalsThemself(cellArr)) {
            this.winner = cellArr[0];
            return true;
        }

        cellArr = [];
        for ( var i = 0; i < this.field.length; i++){
            cellArr[i] = this.field[i] [i];
        }
        if (this.isCellsEqalsThemself(cellArr)) {
            this.winner = cellArr[0];
            return true;
        }

        for (var i = 0; i < this.field.length; i++) {
            cellArr = [];
            for(var j = 0; j < this.field.length; j++) {
                cellArr[j] = this.field[i][j];
            }
            if (this.isCellsEqalsThemself(cellArr)) {    
                this.winner = cellArr[0];
                return true;
            }
        }
        for (var j = 0; j < this.field.length; j++) {
            cellArr = [];
            for(var i = 0; i < this.field.length; i++) {
                cellArr[i] = this.field[i][j];
            }
            if (this.isCellsEqalsThemself(cellArr)) { 
                this.winner = cellArr[0];         
                return true;
            }
        }
        if (this.noMoreTurns()) {
            return true;
        }
        return false;
        
    }

    getWinner() {
        this.isFinished();
        return this.winner ? 'x' : this.winner === false ? 'o' : null;
    }

    noMoreTurns() {
        for(var i = 0; i < this.field.length; i++){
            for(var j = 0; j < this.field.length; j++){
                if (this.field[i][j] === null || this.field[i][j] === undefined){
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        this.isFinished();
        return (this.noMoreTurns() && !this.winner);
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.field[rowIndex][colIndex] === undefined || this.field[rowIndex][colIndex] === null) {
            return null;
        }
        return this.field[rowIndex][colIndex] ? "x" : "o";
    }
}

module.exports = TicTacToe;

function expect(e) {
    return {
        to: {
            equal: function(some) {
                if (e != some) {
                    debugger;
                }
            }
        }
    }
}

let game;
function test() {


    game = new TicTacToe();
    game.nextTurn(1, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal('o')


    game = new TicTacToe();
    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 0)
    expect(game.getWinner()).to.equal('o')


    game = new TicTacToe();
    game.nextTurn(1, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal('o')


    game = new TicTacToe();
    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal('o')


    game = new TicTacToe();
    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal('x')


    game = new TicTacToe();
    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal('x')


    game = new TicTacToe();
    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal('x')


    game = new TicTacToe();
    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)


    game = new TicTacToe();
    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal('x')


    game = new TicTacToe();
    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 0)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(0, 2)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(1, 1)
    expect(game.getWinner()).to.equal(null)

    game.nextTurn(2, 0)
    expect(game.getWinner()).to.equal('x')
}
debugger;
test();