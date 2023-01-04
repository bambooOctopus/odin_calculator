let buttons = document.getElementById("buttons").childNodes;

let screen = document.getElementById("big-text");

buttons.forEach(button => button.addEventListener("click", logButton));

function logButton() {
    console.log(this.id);

    if (this.id.split("")[0] == "n") {
        splitArray = this.id.split("");
        screen.textContent = splitArray[splitArray.length - 1];
    }
}