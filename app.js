console.log('WELCOME TO TIC TAC TOE GAME');
let turnSound = new Audio("ting.mp3");

let turn = "X"

let isGameOver = false

const changeTurn = () => {
    return turn === 'X' ? "0" : "X";
}



//check win

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach((e) => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' WON';
            isGameOver = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })

    // Check for draw
    if (!isGameOver) {
        let isDraw = true;
        Array.from(boxtext).forEach((element) => {
            if (element.innerText === "") {
                isDraw = false;
            }
        });

        if (isDraw) {
            document.querySelector('.info').innerText = "It's a DRAW!";
            isGameOver = true;
        }
    }
}



//main code
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isGameOver) {
            boxtext.innerText = turn;
            turn = changeTurn()
            turnSound.play()
            checkWin()
            if (!isGameOver) {
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
            }

        }
    })
})


//onclick to reset button

reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach((element) => {
        element.innerText = ""
    })

    turn = "X"
    isGameOver = false
    document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
})