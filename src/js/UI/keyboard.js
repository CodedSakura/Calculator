let utils = require("../utils.js");
let size = 200;

class Button {
    constructor(text, classes, colSpan, rowSpan) {
        this.text = `${text.trim()}`;
        this.classes = classes || [];
        this.classes.push("keyboard-button");
        this.colSpan = colSpan || 1;
        this.rowSpan = rowSpan || 1;
    }

    create() {
        let elem = document.createElement("td");
        elem.appendChild(document.createTextNode(this.text));
        this.classes.forEach(c => elem.classList.add(c));
        elem.setAttribute("colspan", this.colSpan);
        elem.setAttribute("rowspan", this.rowSpan);
        elem.addEventListener("click", m => {
            m.preventDefault();
            require("./click.js")(m);
        });
        return elem;
    }
}

module.exports = body => {
    let keyboard = document.createElement("table");
    keyboard.classList.add("keyboard");
    body.appendChild(keyboard);
    let buttons = [
        [new Button("MC"),  new Button("MR"), new Button("MS"), new Button("M+"), new Button("M-")         ],
        [new Button("DEL"), new Button("CE"), new Button("C"),  new Button("±"),  new Button("√")          ],
        [new Button("7"),   new Button("8"),  new Button("9"),  new Button("/"),  new Button("%")          ],
        [new Button("4"),   new Button("5"),  new Button("6"),  new Button("*"),  new Button("1/x")        ],
        [new Button("1"),   new Button("2"),  new Button("3"),  new Button("-"),  new Button("=", [], 1, 2)],
        [new Button("0", [], 2),              new Button("."),  new Button("+")                            ]
    ];

    buttons.forEach(row => {
        let keyCol = document.createElement("tr");
        keyboard.appendChild(keyCol);
        row.forEach(button => {
            keyCol.appendChild(button.create());
        });
    });

    return keyboard;
};