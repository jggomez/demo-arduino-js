const jf = require("johnny-five");
const board = new jf.Board();

let led1, led2, led3, led4;

board.on("ready", () => {
    led1 = new jf.Led(13);
    led2 = new jf.Led(12);
    led3 = new jf.Led(11);
    led4 = new jf.Led(10);
    ledsGame();
});

let sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function ledsGame() {

    led1.on();
    sleep(3000).then(() => {
        led1.off();
        led2.on();
        return sleep(3000);
    }).then(() => {
        led2.off();
        led3.on();
        return sleep(3000);
    }).then(() => {
        led3.off();
        led4.on();
        return sleep(3000);
    }).then(() => {
        led4.off();
        ledsGame();
    });

}


