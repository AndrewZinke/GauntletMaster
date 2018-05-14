//entirely new js class
//Traps.js contains the trap data

var trap1, trap2, trap3, trap4;

//variables for trap width and height
var tW = 10;
var tH = 40;

//trap hitbox shapes
var t1hb, t2hb, t3hb, t4hb;


//trap x, y variables
var trap1x, trap1y;
var trap2x, trap2y;
var trap3x, trap3y;
var trap4x, trap4y;

//coin variable
var coin;

//begin spritesheet data
bladedata = { //864 x 162
    images: ["blade.png"],
    frames: { width: 288, height: 162, count: 3 },
    animations: {
        stop: 1,
        go: {
            frames: [0, 2],
            speed: 0.1
        }
    }
};

boulderdata = { //864 x 162
    images: ["boulder.png"],
    frames: { width: 288, height: 162, count: 3 },
    animations: {
        stop: 0,
        go: {
            frames: [0, 2],
            speed: 0.1
        }
    }
};


blowdartdata = { //864 x 162
    images: ["blowdart.png"],
    frames: { width: 288, height: 162, count: 3 },
    animations: {
        stop: 0,
        go: {
            frames: [0, 2],
            speed: 0.1
        }
    }
};

snakesdata = { //864 x 162
    images: ["snakes.png"],
    frames: { width: 288, height: 162, count: 3 },
    animations: {
        stop: 0,
        go: {
            frames: [0, 2],
            speed: 0.1
        }
    }
};

//new function to create bladeTrap
function addBladeTrap() {
    var sprsht = new createjs.SpriteSheet(bladedata);
    trap1 = new createjs.Sprite(sprsht, "go");
    // trap1 = new createjs.Bitmap("trap1_swingingBlade.png");
    trap1x = Math.floor((Math.random() * 300) + 50); trap1y = Math.floor((Math.random() * 400) + 50);
    trap1.x = trap1x; trap1.y = trap1y;
    trap1.scaleX = 0.3; trap1.scaleY = 0.3;

    var gt1 = new createjs.Graphics();
    gt1.beginFill("brown").drawRect(0, 0, 84, 45);
    t1hb = new createjs.Shape(gt1);
    t1hb.x = trap1x; t1hb.y = trap1y;
    t1hb.alpha = 0;
    stage.addChild(t1hb);
    trap1.alpha = .4;
    stage.addChild(trap1);
}

// new function to create blowDartTrap
function addBlowdartTrap() {
    //creation of blowdart trap and blowdart hitbox
    var sprsht2 = new createjs.SpriteSheet(blowdartdata);
    trap2 = new createjs.Sprite(sprsht2, "go");
    //trap2 = new createjs.Bitmap("trap2_blowdart.png");
    trap2x = Math.floor((Math.random() * 300) + 50); trap2y = Math.floor((Math.random() * 400) + 50);
    trap2.x = trap2x; trap2.y = trap2y;
    trap2.scaleX = 0.2; trap2.scaleY = 0.2;

    var gt2 = new createjs.Graphics();
    gt2.beginFill("brown").drawRect(0, 0, 60, 30);
    t2hb = new createjs.Shape(gt2);
    t2hb.x = trap2x; t2hb.y = trap2y;
    t2hb.alpha = 0;
    stage.addChild(trap2);
    trap2.alpha = .4;
    stage.addChild(t2hb);
}

//new function to create snake trap
function addSnakeTrap() {
    //creation of snake trap and hitbox
    var sprsht3 = new createjs.SpriteSheet(snakesdata);
    trap3 = new createjs.Sprite(sprsht3, "go");
    //trap3 = new createjs.Bitmap("trap3_snakes.png");
    trap3x = Math.floor((Math.random() * 300) + 50); trap3y = Math.floor((Math.random() * 400) + 50);
    trap3.x = trap3x; trap3.y = trap3y;
    trap3.scaleX = 0.2; trap3.scaleY = 0.2;

    trap3.alpha = .4;
    stage.addChild(trap3);

    var gt3 = new createjs.Graphics();
    gt3.beginFill("brown").drawRect(0, 0, 60, 30);
    t3hb = new createjs.Shape(gt3);
    t3hb.x = trap3x; t3hb.y = trap3y;
    t3hb.alpha = 0;
    stage.addChild(t3hb);
}

//new function to create bouldertrap
function addBoulderTrap() {
    //creation of boulder trap and hitbox
    var sprsht4 = new createjs.SpriteSheet(boulderdata);
    trap4 = new createjs.Sprite(sprsht4, "go");
    //trap4 = new createjs.Bitmap("trap4_boulder.png");
    trap4x = Math.floor((Math.random() * 300) + 50); trap4y = Math.floor((Math.random() * 400) + 50);
    trap4.x = trap4x; trap4.y = trap4y;
    trap4.scaleX = 0.2; trap4.scaleY = 0.2;

    trap4.alpha = .4;
    stage.addChild(trap4);

    var gt4 = new createjs.Graphics();
    gt4.beginFill("brown").drawRect(0, 0, 60, 30);
    t4hb = new createjs.Shape(gt4);
    t4hb.x = trap4x; t4hb.y = trap4y;
    t4hb.alpha = 0;
    stage.addChild(t4hb);
}

function addCoin() {
    gCoin = new createjs.Graphics();
    gCoin.beginFill("yellow").drawCircle(0, 0, 5);
    coin = new createjs.Shape(gCoin);
    coin.x = Math.floor((Math.random() * 300) + 50);
    coin.y = Math.floor((Math.random() * 300) + 50);
    stage.addChild(coin);
    stage.update();
}


function updateTraps() {

    trap1x = Math.floor((Math.random() * 300) + 50); trap1y = Math.floor((Math.random() * 400) + 50);
    trap1.x = trap1x; trap1.y = trap1y;
    t1hb.x = trap1x; t1hb.y = trap1y;

    trap2x = Math.floor((Math.random() * 300) + 50); trap2y = Math.floor((Math.random() * 400) + 50);
    trap2.x = trap2x; trap2.y = trap2y;
    t2hb.x = trap2x; t2hb.y = trap2y;

    trap3x = Math.floor((Math.random() * 300) + 50); trap3y = Math.floor((Math.random() * 400) + 50);
    trap3.x = trap3x; trap3.y = trap3y;
    t3hb.x = trap3x; t3hb.y = trap3y;

    trap4x = Math.floor((Math.random() * 300) + 50); trap4y = Math.floor((Math.random() * 400) + 50);
    trap4.x = trap4x; trap4.y = trap4y;
    t4hb.x = trap4x; t4hb.y = trap4y;
}

function addTraps() {
    addBladeTrap();
    addBlowdartTrap()
    addSnakeTrap();
    addBoulderTrap();
    addCoin();
    stage.update();
}