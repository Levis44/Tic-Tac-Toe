
let squares = document.querySelectorAll(".square");
let reset = document.querySelector("#reset");
let ganhador = '';
const div = document.querySelector(".display");

reset.addEventListener('click', resetGame);

squares.forEach((square) => {
    square.addEventListener('click', handleClick);
});

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if(handleMove(position) == 'deuVelha') {
        reset.classList.remove("none");
        div.classList.remove("none");
        div.innerHTML = `<h1>Deu velha</h1>`;

    } else if (handleMove(position) == 'ganhou') {
        reset.classList.remove("none");
        div.classList.remove("none");
        quemGanhou();
        div.innerHTML = `<h1>O ganhador foi o ${ganhador}</h1>`;

    }

    updateSquare(position);
}

function quemGanhou() {
    if (playerTime == 0) {
        ganhador = 'O'
    } else {
        ganhador = 'X'
    }
}

function updateSquare(position) {

    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

 function resetGame() {
    reset.classList.add("none")
    div.classList.add("none")
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let filho = square.children[0];
        let position = square.id;
        let symbol = board[position];

        if (symbol != ''){
            filho.classList.remove(`${symbol}`);
        }
    })

    resetGameVars();
 }

