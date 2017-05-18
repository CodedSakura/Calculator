let body = document.createElement("div");
body.classList.add("body");
document.body.appendChild(body);
let display = require("./display.js")(body),
    keyboard = require("./keyboard.js")(body);
