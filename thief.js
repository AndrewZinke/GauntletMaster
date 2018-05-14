//entirely new js class
// thief.js

var t1Image;

var theifHB;

var theifW, theifH;
theifW = 30;
theifH = 10;
//thief
thiefdata = { //1920 x 1621
    //960w x 540h (frame width and height)
    images: ["thiefSpriteSheet.png"],
    frames: { width: 960, height: 540, count: 6 },
    animations: {
        stop: 4,
        run: {
            frames: [0, 3],
            speed: 0.1
        },
        doge: 5
    }
};
//end spritesheets data



var thiefActions = {

    init: function(){
        var sprsht = new createjs.SpriteSheet(thiefdata);
        t1Image = new createjs.Sprite(sprsht, "stop");
        t1Image.x = 0; t1Image.y = 0;
        t1Image.scaleX = 0.1;
        t1Image.scaleY = 0.1;
    },

    run: function () {
        t1Image.gotoAndPlay("run");
    },

    skid: function(){
        t1Image.gotoAndPlay("doge");
    },

    stop: function () {
        t1Image.gotoAndPlay("stop");
    }

}