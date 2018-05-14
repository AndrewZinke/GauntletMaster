//entirely new js class
// timer.js

var timer = {
    //members
    startTime: 0,
    currentTime: 0,

    start: function () {
        this.startTime = (new Date()).getTime();
    },

    getInSeconds: function(){
        return Math.floor((this.currentTime - this.startTime) / 1000);
    },

    updateT: function () {
        //update timer
        this.currentTime = (new Date()).getTime();
        //get time in seconds
        var time = this.getInSeconds();

        //formatting of time display
        if (time < 10) {
            textTimer.text = "0:0" + time;
        } else if (time < 60) {
            textTimer.text = "0:" + time;
        } else if (time < 3600) {//less than one hour
            textTimer.text = Math.round((time / 60)) +
                ((time % 60 < 10) ? ":0" : ":") + (time % 60);
        } else {
            //greater than an hour, wont happen probably
            //...if needed, could continue similarly to previous conditionals
            textTimer.text = time + "s";
        }
    }

}