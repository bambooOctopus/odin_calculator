let buttons = document.getElementById("buttons").childNodes;

let screen = document.getElementById("big-text");

const numArray = [];

buttons.forEach(button => button.addEventListener("click", logButton));

function logButton() {
    console.log(this.id);

    if (this.id.split("")[0] == "n") {
        splitArray = this.id.split("");
        let num = screen.textContent = splitArray[splitArray.length - 1];
        numArray.push(num);
        screen.textContent = numArray.join("");
        
    }
    else if (this.id == "clear") {
        let length = numArray.length;
        console.log(length);
        
        for (let i = 0; i < length; i ++) {
            numArray.pop();
            screen.textContent = numArray;
        }

        
    }
}