module.exports = body => {
    let display = document.createElement("div");
    display.classList.add("display");
    body.appendChild(display);
    let output = document.createElement("input");
    display.appendChild(output);

    return display;
};