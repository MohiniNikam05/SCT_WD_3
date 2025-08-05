console.log("welcome to Tic Tac Toe");

let music = new Audio("background.mp3");
let Audioturn = new Audio("X&Osound.mp3");
let gameover = new Audio("gameover.wav");

let turn = "X";
let isgameover = false;

const changeturn = () => turn === "X" ? "0" : "X";

const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];

    wins.forEach(e => {
        let b = boxtext;
        if (b[e[0]].innerText === b[e[1]].innerText &&
            b[e[2]].innerText === b[e[1]].innerText &&
            b[e[0]].innerText !== "") {
                
            document.querySelector('.Info').innerText = b[e[0]].innerText + " WON";
            isgameover = true;
            gameover.play();
            document.querySelector('.imagebox img').style.width = "200px";
            document.querySelector('.line').style.width = "20vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    });
};

const checkDraw = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let allFilled = Array.from(boxtexts).every(box => box.innerText !== "");
    if (allFilled && !isgameover) {
        document.querySelector('.Info').innerText = "It's a Draw!";
        isgameover = true;
    }
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isgameover) {
            boxtext.innerText = turn;
            Audioturn.play();
            checkwin();
            if (!isgameover) {
                turn = changeturn();
                document.querySelector(".Info").innerText = "Turn for " + turn;
                checkDraw();
            }
        }
    });
});

document.getElementById('reset').addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    boxtexts.forEach(box => box.innerText = "");
    turn = "X";
    isgameover = false;
    document.querySelector('.line').style.width = "0vw";
    document.querySelector('.line').style.transform = "none";
    document.querySelector(".Info").innerText = "Turn for " + turn;
    document.querySelector('.imagebox img').style.width = "0px";
});
