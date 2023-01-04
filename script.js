let buttons = document.getElementById("buttons").childNodes;

buttons.forEach(button => button.addEventListener("click", logButton));

function logButton() {
    console.log(this.id);

    if (this.id.split("")[0] == "n") {
        splitArray = this.id.split("");
        console.log(splitArray[splitArray.length - 1])
    }
}