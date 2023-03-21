// DOM selectors
const start = document.getElementById("startButton");
const reset = document.getElementById("resetButton");
const now = document.getElementById("nowScore");
const best = document.getElementById("bestScore");
const gameBoard = document.getElementById("board");


//** Global Variables */
let snake = {
    // [0]=tail   last = head [x,y]
    body: [[10, 5], [10, 6], [10, 7], [10, 8]],
}
let gameState = {
    apple: [15, 15],
}


//** Start Initial State */
start.addEventListener("click", function (event) {
    console.log("start function, snake array");
    console.log(snake.body);
    reset.style.display = "block";
    renderState();
});


//** differentiate the head */
function headColor() {
    const headSnake = document.getElementById(`${snake.body[snake.body.length - 1][0]}-${snake.body[snake.body.length - 1][1]}`);
    headSnake.classList.add("head");
}


//** RenderState */
function renderState() { //render = updates the html & DOM - so we can visually see
    gameBoard.innerHTML = ''; //clearing the existing board to re-render another copy, appending
    for (let i = 0; i < 20; i++) { //row

        for (let j = 0; j < 20; j++) { //columns
            const buildGrid = document.createElement("div");
            buildGrid.setAttribute("id", `${j}-${i}`);
            gameBoard.appendChild(buildGrid);
        }
    }

    start.style.display = "none";

    const apple = document.getElementById(`${gameState.apple[0]}-${gameState.apple[1]}`);
    apple.classList.add("apple");

    for (let i = 0; i < snake.body.length; i++) {
        const showSnake = document.getElementById(`${snake.body[i][0]}-${snake.body[i][1]}`);
        if (showSnake === null) {
            alert("You hit the wall! Game over! :[");
            resetOver();
        }
        showSnake.classList.add("snake");
    }

    headColor();
    eats();
    score();
}




//** Snake moving  */
function snakeMoving() {
    snake.body.shift();

    let snakeArr = snake.body[snake.body.length - 1];
    let newHead = [(snake.nextDirection[0] + snakeArr[0]), (snake.nextDirection[1] + snakeArr[1])];
    snake.body.push(newHead);

}



//** Snake Eats: itself or apple */
function eats() {
    const rowHead = snake.body[snake.body.length - 1][0];
    const columnHead = snake.body[snake.body.length - 1][1];
    for (let i = 0; i < snake.body.length - 1; i++) {
        if (snake.body[i][0] === rowHead && snake.body[i][1] === columnHead) { //eats itself
            alert("Uh oh..looks like the snake ate itself! Try moving in the opposite direction.");
            resetOver();
        }
    }
    if (rowHead === gameState.apple[0] && columnHead === gameState.apple[1]) {
        currentScore += 1;
        eatsApple();
    }
}


function eatsApple() {
    gameState.apple = [];
    for (let i = 0; i < snake.body.length; i++) {
        let newApple = [Math.floor(Math.random() * 5), Math.floor(Math.random() * 5)]
        if (snake.body[i][0] !== newApple[0] && snake.body[i][1] !== newApple[1]) {
            gameState.apple = newApple;
            console.log("good apple");
        } else {
            newApple = [Math.floor(Math.random() * 5), Math.floor(Math.random() * 5)]
            gameState.apple = newApple;
            console.log("bad apple");
        }
    }

    const grow = [0, -1];
    let newTail = [(snake.body[0] + grow[0]), (snake.body[1] + grow[1])];
    snake.body.unshift(newTail);
}



//** Arrow Keys */
document.addEventListener('keydown', arrowKeys);

function arrowKeys(event) {
    console.log(event.code);
    if (event.code === "ArrowUp") {
        snake.nextDirection = [0, -1];
        //decrease y-axis = going up
    } else if (event.code === "ArrowDown") {
        //increase y-axis = going down
        snake.nextDirection = [0, 1];
    } else if (event.code === "ArrowLeft") {
        snake.nextDirection = [-1, 0];
    } else if (event.code === "ArrowRight") {
        snake.nextDirection = [1, 0];
    } else {
        alert("wrong key! use the arrow keys.");
        return;
    }

    snakeMoving();
    renderState();
    // setInterval (renderState, 10000);
    // console.log("moving");
}




//** Reset Game *//
reset.addEventListener("click", resetOver);
function resetOver() {
    listArray.push(currentScore);
    previousScores();

    gameBoard.innerHTML = "";
    currentScore = 0;
    document.getElementById("nowScore").innerText = "Now: 0";
    start.style.display = "block";
    reset.style.display = "none";

    const grabDiv = document.createElement("div");
    grabDiv.classList.remove("snake");
    grabDiv.classList.remove("apple");

    snake = {
        body: [[10, 5], [10, 6], [10, 7], [10, 8]],
    }
    gameState = {
        apple: [15, 15],
    }
};



//** Score */
let currentScore = 0;
let bestScore = 0;
function score() {
    const snakeLength = document.getElementsByClassName("snake").length;
    for (let i = 3; i < snakeLength; i++) {
        document.getElementById("nowScore").innerText = "Now: " + currentScore;
        if (currentScore > bestScore) {
            bestScore += 1;
            document.getElementById("bestScore").innerText = "Best: " + bestScore;
        }
    }
}


const list = document.getElementById("pastScores");
let listArray = [];

function previousScores() {
    for (let i = 0; i < listArray.length; i++) {
        const oldScore = listArray[i];
        const listElement = document.createElement('li');
        listElement.innerText = oldScore;
        list.appendChild(listElement);
        listArray = [];
    }
    // highScore ();
}


//** highlight highest score in scoreboard */
// function highScore () {
//     let content = document.getElementsByTagName("li").textContent;
//     const numbers = document.getElementsByTagName("li").length;
//     console.log(numbers);
//     console.log(content);  <-- shows undefined

//     for (let i = 0; i < numbers; i++) {
//         console.log("reached here");
//         if (i.textContent < content) { ??
//             console.log("high number");
//         }
//     }
// }



//** How to play */
let gameInstructions = document.getElementById("how");
gameInstructions.addEventListener("click", function () {
    alert("Instructions: Use the arrow keys to move the snake. Eat apples to grow. Don't eat yourself or hit the wall! Good luck :)")
});