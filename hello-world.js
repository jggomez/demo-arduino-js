/*
    Juan Guillermo Gómez
*/

const jf = require("johnny-five");
const board = new jf.Board();

board.on("ready", () => {
    const led = new jf.Led(13);
    setInterval(() => {
        led.toggle();
    }, 3000);
});
