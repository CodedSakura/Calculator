let utils = require("../utils.js");
let size = 200;

module.exports = body => {
    let keyboard = document.createElement("div");
    keyboard.classList.add("keyboard");
    body.appendChild(keyboard);
    let buttons = [
        ["7", "8", "9", "←"],
        ["4", "5", "6", "/"],
        ["1", "2", "3", "*"],
        [".", "0", "=", "-"],
        [" ", " ", " ", "+"]
    ];
    buttons = utils.trim2DArray(utils.flip2DArray(buttons));
    console.log(buttons);

    buttons.forEach(row => {
        let keyCol = document.createElement("div");
        keyCol.classList.add("keyboard-column");
        keyboard.appendChild(keyCol);
        row.forEach(button => {
            let keyButton = document.createElement("div");
            keyButton.appendChild(document.createTextNode(button));
            keyButton.style.height = `${size / row.length}px`;
            keyButton.style.width = `${size / row.length}px`;
            keyButton.style.fontSize = `${(size / row.length - 5) / button.length}px`;
            keyButton.classList.add("keyboard-button");
            keyCol.appendChild(keyButton);
        });
    });

    return keyboard;
};