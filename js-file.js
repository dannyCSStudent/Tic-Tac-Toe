let i = 0;
let square = 'X';
let position;
const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

const disableButtons = (isTrue) => {
    const buttons = document.querySelectorAll('.grid');
    buttons.forEach((button) => {
        button.disabled = isTrue;
    })
}

const play = document.getElementById('play-button');
play.addEventListener('click', function() {
    const o = document.getElementById('o-name').value;
    const x = document.getElementById('x-name').value;
    if (o == '' || x == '') {
        alert('Enter Player Names');
        return;
    }
    document.getElementById('x-player').textContent = x.toUpperCase();
    document.getElementById('o-player').textContent = o.toUpperCase();
    play.disabled = true;
    document.getElementById('x-name').disabled = true;
    document.getElementById('o-name').disabled = true;
    disableButtons(false);
})

const check = (s) => {
    ++i;
    if ( 
        (board[0][0] == s && board[0][1] == s && board[0][2] == s) ||
        (board[1][0] == s && board[1][1] == s && board[1][2] == s) ||
        (board[2][0] == s && board[2][1] == s && board[2][2] == s) ||
        (board[0][0] == s && board[1][0] == s && board[2][0] == s) ||
        (board[0][1] == s && board[1][1] == s && board[2][1] == s) ||
        (board[0][2] == s && board[1][2] == s && board[2][2] == s) ||
        (board[0][0] == s && board[1][1] == s && board[2][2] == s) ||
        (board[2][0] == s && board[1][1] == s && board[0][2] == s)) {
            document.querySelector('.banner').textContent = s + ' Wins';
            disableButtons(true);
            return 1;
    }
    else if (i == 9) {
        document.querySelector('.banner').textContent = 'Tie';
        return 0;
    } 
    return - 1;
}

const middle = document.querySelector('.middle');
middle.addEventListener("click", function(e) {
    if (e.target.matches(".grid")) {
        e.target.textContent = square;
        e.target.disabled = true;
        position = (e.target.value)
        let p = position.split(" ");
        let row = parseInt(p[0])
        let column = parseInt(p[1])
        board[row][column] = square;
        if (check(square) == 1) {
            return
        }
        if (square == 'X') {
            
            square = 'O';
            
        } else {
            square = 'X';
        } 
    }
})
disableButtons(true);