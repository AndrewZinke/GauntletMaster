//new js code with animations:
var stage;

//container to hold game
var game

//artifact variable
var artifact;

//thieves entry variable
var tEntry;

//display timer
var textTimer;
// thief movement per tick
const TX = 5;

//thief hitbox
var tHB;

//variables to handle score
var textScore;
var score;



//variables for keyboard input
const ARROW_KEY_LEFT = 37;
const ARROW_KEY_UP = 38;
const ARROW_KEY_RIGHT = 39;
const ARROW_KEY_DOWN = 40;
var leftKeyDown = false;
var rightKeyDown = false;
var upKeyDown = false;
var downKeyDown = false;

function playSound() {
    document.getElementById('audiotag1').play();
}

function load() { intro();}

//*new* function to create the into message, used onload from the htm file
function intro() {
        stage = new createjs.Stage("canvas");
        var msg = "You are a brave thief \r who is after immense power and wealth\r your goal is to use the arrow keys \r to collect as many coins as possible \r and to reach the artifact in the lower right of the screen. \r When you are ready to begin the task, hit the start button below";
        introText = new createjs.Text(msg, "18px Times");
        introText.color = 'black';
        introText.textAlign = 'center';
        introText.x = stage.canvas.width / 2;
        introText.y = stage.canvas.height / 3.5;
        stage.addChild(introText);
        stage.update();
}


function init() {
    stage = new createjs.Stage("canvas");
    var audio = new Audio('09 Come and Find Me - B mix');
    playSound();

    drawStage();//draws border, entry, & artifact

    thiefActions.init();

    //create a container to hold the original game pieces
    game = new createjs.Container();
    game.addChild(artifact, tEntry, t1Image, tHB);

    stage.addChild(game);

    //*new* code to implement a timer
    textTimer = new createjs.Text("0:00", "20px Arial", "ffffff");
    textTimer.x = 450;
    textTimer.y = 10;
    textTimer.visible = false;//will be visible at start

    stage.addChild(textTimer);

    //*new* code to implement textScore
    textScore = new createjs.Text("", "20px Arial", "ffffff");
    textScore.x = 420;
    textScore.y = 30;
    stage.addChild(textScore);
    stage.update();

    // TICKER
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", run);
    
    // KEYBOARD
    window.onkeydown = handleKeyDown;
    window.onkeyup = handleKeyUp;

}

function drawStage() {
    // create artifact
    g3 = new createjs.Graphics();
    g3.beginFill("black").drawRect(360, 485, 15, 3);
    g3.beginFill("black").drawRect(360, 485, 3, 18);
    g3.beginFill("black").drawRect(375, 485, 3, 15);
    g3.beginFill("black").drawRect(360, 500, 18, 3);
    g3.beginFill("yellow").drawCircle(369, 494, 5);
    artifact = new createjs.Shape(g3);

    //create theives entry point
    g4 = new createjs.Graphics();
    g4.beginFill("brown").drawCircle(0, 0, 20);
    g4.beginFill("grey").drawCircle(0, 0, 5);
    tEntry = new createjs.Shape(g4);

    //*new* create the hitbox for the thief
    gThief = new createjs.Graphics();
    gThief.beginFill("black").drawRect(35, 15, 20, 30);
    tHB = new createjs.Shape(gThief);
    tHB.alpha = 0;

}

function startGame() {
    init();
    score = 0;
    addTraps();
    timer.start();
    textTimer.visible = true;
}


//function to move thief, checks for collision, updates timer, been simplified in new version 
function run(e) {
    timer.updateT();
    checkKeysDown();
    stage.update();
}

//*new* function to check keysDown
function checkKeysDown() {
    if (leftKeyDown) {
        thiefActions.run();
        if (t1Image.x >= 0) {
            t1Image.x = t1Image.x - TX;
            tHB.x = tHB.x - TX;
            stage.update();
        }
        checkCollision()
    }

    if (rightKeyDown) {
        thiefActions.run();
        if (t1Image.x <= 440) {
            t1Image.x = t1Image.x + TX;
            tHB.x = tHB.x + TX;
            stage.update();
        }
        checkCollision()
    }

    if (upKeyDown) {
        thiefActions.run();
        if (t1Image.y >= 0) {
            t1Image.y = t1Image.y - TX;
            tHB.y = tHB.y - TX;
            stage.update();
        }
        checkCollision()
    }

    if (downKeyDown) {
        if (rightKeyDown || leftKeyDown || upKeyDown) { thiefActions.run(); }
        else { thiefActions.skid(); }
        if (t1Image.y <= 445) {
            t1Image.y = t1Image.y + TX;
            tHB.y = tHB.y + TX;
            stage.update();
        }
        checkCollision()
    }
}

//*new*function to check for collision
function checkCollision() {
    if ((t1Image.x > 320 && t1Image.x < 340) && t1Image.y >= 445) {
        gameWin();
    }
    if (tHB.x < t1hb.x + 44 &&
        tHB.x + 50 > t1hb.x &&
        tHB.y < t1hb.y + 35 &&
        tHB.y + 40 > t1hb.y) {
        gameOver();
    }
    if (tHB.x < t2hb.x + 20 &&
        tHB.x + 50 > t2hb.x &&
        tHB.y < t2hb.y + 15 &&
        tHB.y + 40 > t2hb.y) {
        gameOver();
    }
    if (tHB.x < t3hb.x + 20 &&
        tHB.x + 50 > t3hb.x &&
        tHB.y < t3hb.y + 15 &&
        tHB.y + 40 > t3hb.y) {
        gameOver();
    }
    if (tHB.x < t4hb.x + 20 &&
        tHB.x + 50 > t4hb.x &&
        tHB.y < t4hb.y + 15 &&
        tHB.y + 40 > t4hb.y) {
        gameOver();
    }
    if (tHB.x < coin.x + 5 &&
        tHB.x + 50 > coin.x &&
        tHB.y < coin.y + 5 &&
        tHB.y + 40 > coin.y) {
        addScore();
    }
}

function handleKeyDown(e) {
    switch (e.keyCode) {
        case ARROW_KEY_LEFT: leftKeyDown = true; break;
        case ARROW_KEY_RIGHT: rightKeyDown = true; break;
        case ARROW_KEY_UP: upKeyDown = true; break;
        case ARROW_KEY_DOWN: downKeyDown = true; break;
    }
}

function handleKeyUp(e) {
    switch (e.keyCode) {
        case ARROW_KEY_LEFT: leftKeyDown = false; break;
        case ARROW_KEY_RIGHT: rightKeyDown = false; break;
        case ARROW_KEY_UP: upKeyDown = false; break;
        case ARROW_KEY_DOWN:
            thiefActions.run();
            downKeyDown = false;
            break;
    }
}

//function to display game won screen
function gameWin() {
    stage.removeAllChildren();
    var win = new createjs.Text("YOU WIN!", "60px Arial", "green");
    win.textAlign = "center"; win.outline = 2;
    win.x = stage.canvas.width / 2; win.y = canvas.height / 2;

    //*new* code to implement score onto gameWon screen
    textScore.textAlign = "center"; textScore.outline = 2;
    textScore.x = stage.canvas.width / 2; textScore.y = (canvas.height / 2) + 100;

    stage.addChild(win, textScore);

    createjs.Tween.get(textScore).to({ rotation: 360 }, 1000).wait(1000);
    createjs.Tween.get(win).to({ rotation: 360 }, 1000).wait(1000);

    stage.update();
}

//function to display gameover screen
function gameOver() {
    stage.removeAllChildren();
    var lose = new createjs.Text("YOU LOST!", "60px Arial", "red");
    lose.textAlign = "center"; lose.outline = 2;
    lose.x = stage.canvas.width / 2; lose.y = canvas.height / 2;

    textScore.textAlign = "center"; textScore.outline = 2;
    textScore.x = stage.canvas.width / 2; textScore.y = (canvas.height / 2) + 100;

    stage.addChild(lose, textScore);

    createjs.Tween.get(textScore).to({ rotation: 360 }, 1000).wait(1000);
    createjs.Tween.get(lose).to({ rotation: 360 }, 1000).wait(1000);

    stage.update();
}

//*new* function to update score
function addScore() {   
    score = score + 1;
    textScore.text = "Score: " + score;
    textScore.visible = true;//will be visible once score has been acquired
    coin.x = Math.floor((Math.random() * 400) + 50);
    coin.y = Math.floor((Math.random() * 400) + 50);
    updateTraps();
    stage.addChild(textScore);
}

//function to reset pieces to original location, changed to fix past bugs in the past 
function resetGame() {
    score = 0;
    stage.removeAllChildren();
    intro();
    stage.update();
}

