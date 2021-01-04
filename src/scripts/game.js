// iniciar variáveis

let board = ['', '', '','', '', '','', '', ''];
let playerTime = 0;
let symbol = ['o', 'x'];
let ganhou = '';
let deuVelha = '';
let venceu = false;
let velha = false;

let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


function handleMove(position) {
    if (board[position] == '') {

        board[position] = symbol[playerTime]

        venceu = isWin();
        velha = empatou();

        playerTime = playerTime == 0 ? 1 : 0;

    }

    if(venceu) {
        ganhou = 'ganhou';
        return ganhou 
    } else if (velha) {
        deuVelha = 'deuVelha'
        return deuVelha
    }

    console.log(playerTime)

}


function isWin() {
    
    for(let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            return true;
        }
    }

    return false;
}


function empatou() {

    let boardCompleto = board.filter((string) => {return string == '' })

    if (boardCompleto.length == 0 && isWin() == false) {
        return true
    }
    return false;
}

function resetGameVars() {
    board = ['', '', '','', '', '','', '', ''];
    playerTime = 0;
    symbol = ['o', 'x'];
    ganhou = '';
    deuVelha = '';
    venceu = false;
    velha = false;
}